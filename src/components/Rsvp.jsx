import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TextField, InputAdornment, IconButton, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import sha1 from 'js-sha1';
import Button from 'components/Button';
import Block from 'components/Block';
import styles from 'components/rsvp.module.css';
import formControlLabelStyles from 'components/formcontrollabel.module.css';
const axios = require('axios').default;

const api = axios.create({
    baseURL: 'https://sheetdb.io/api/v1/ysnwocbrmo583',
    timeout: 5000,
});

const orchestrate = {
    hidden: {
    },
    visible: {
        transition: {
            staggerChildren: .2,
        }
    }
}

const animatePresence = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .3,
            ease: "easeInOut",
        }
    }
}

const Rsvp = (props) => {

    const [code, setCode] = useState("");
    const [family, setFamily] = useState([]);
    const [comment, setComment] = useState("");
    const animation = useAnimation();

    const handleIsAttendingCheckBox = (event, i) => {
        let newFamily = [...family];
        newFamily[i].is_attending = event.target.value;
        setFamily(newFamily);
    }

    const handleIsBringingGuestCheckBox = (event, i) => {
        let newFamily = [...family];
        newFamily[i].is_bringing_guest = event.target.value;
        setFamily(newFamily);
    }

    const handleGuestName = (name, i) => {
        let newFamily = [...family];
        newFamily[i].guest_name = name;
        setFamily(newFamily);
    }

    const handleSearchCode = (e) => {
        e.preventDefault();
        const invitation_code = sha1(code.trim());
        api.get("https://sheetdb.io/api/v1/ysnwocbrmo583/search?invitation_code=" + invitation_code).then((result) => {
            console.log(result);
            setFamily(result.data);
            document.getElementById('rsvp').scrollIntoView({
                behavior: 'smooth',
                alignToTop: false,
            });
            animation.start("visible");
        }, (error) => {
            console.log(error);
        });
    }

    const handleRsvpSubmit = (e) => {
        e.preventDefault();
        let submitFamily = [...family];
        submitFamily.map((person) => {
            person.did_rsvp = "TRUE";
            person.comment = comment;
            person.query = "id=" + person.id;
            return person;
        });
        console.log(submitFamily);
        api.put('/batch_update', {
            data: submitFamily
        }).then((result) => {
            console.log(result);
            setFamily([]);
            setCode("");
        }, (error) => {
            console.log(error);
        });

    }

    return (
        <div className={styles.rsvpDiv}>
            <Block blockTitle="RSVP" titleClass={styles.title} {...props}>
                <form className={styles.form} onSubmit={handleSearchCode}>
                    <p>Enter the code that came with your invitation to locate your RSVP.</p>
                    <TextField
                        id="code"
                        required
                        label="Code" variant="outlined" fullWidth
                        value={code}
                        onChange={e => setCode(e.target.value)}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        size="medium"
                                        aria-label="submit code"
                                        onClick={handleSearchCode}
                                    >
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </form>
                <motion.form className={styles.form} onSubmit={handleRsvpSubmit}
                    variants={orchestrate}
                    initial="hidden"
                    animate={animation}>
                    {family.map(({
                        id,
                        first_name,
                        last_name,
                        is_attending,
                        allowed_guest,
                        is_bringing_guest,
                        guest_name,
                    }, index) =>
                        <motion.div key={id} className={styles.rsvpResponseDiv} variants={animatePresence}>
                            <h2 className={styles.h2} >{first_name} {last_name}</h2>
                            <div className={styles.rsvpFlex}>
                                <p className={styles.p}>Will {first_name} be attending?</p>
                                <div>
                                    <RadioGroup
                                        row
                                        aria-label="is-attending"
                                        name="is-attending"
                                        value={is_attending}
                                        onChange={(e) => { handleIsAttendingCheckBox(e, index) }}>
                                        <FormControlLabel
                                            classes={formControlLabelStyles}
                                            value="yes"
                                            control={<Radio color="primary" />}
                                            label="Yes"
                                            labelPlacement="top"
                                        />
                                        <FormControlLabel
                                            classes={formControlLabelStyles}
                                            value="no"
                                            control={<Radio color="primary" />}
                                            label="No"
                                            labelPlacement="top"
                                        />
                                    </RadioGroup>
                                </div>
                            </div>
                            {allowed_guest === "TRUE" &&
                                <div className={styles.rsvpFlex}>
                                    <p className={styles.p} style={{ maxWidth: "150px" }}>
                                        Will {first_name} be bringing a guest?
                                    </p>
                                    <div>
                                        <RadioGroup
                                            row
                                            aria-label="bringing-guest"
                                            name="bringing-guest"
                                            value={is_bringing_guest}
                                            onChange={(e) => { handleIsBringingGuestCheckBox(e, index) }}>
                                            <FormControlLabel
                                                classes={formControlLabelStyles}
                                                value="yes"
                                                control={<Radio color="primary" />}
                                                label="Yes"
                                                labelPlacement="top"
                                            />
                                            <FormControlLabel
                                                classes={formControlLabelStyles}
                                                value="no"
                                                control={<Radio color="primary" />}
                                                label="No"
                                                labelPlacement="top"
                                            />
                                        </RadioGroup>
                                    </div>
                                </div>
                            }
                            {is_bringing_guest === "yes" &&
                                <motion.div variants={animatePresence} initial="hidden" animate="visible" className={styles.rsvpFlex}>
                                    <TextField
                                        id="guest_name"
                                        defaultValue={guest_name}
                                        fullWidth
                                        required
                                        label="Guest Name" variant="outlined"
                                        onChange={(e) => { handleGuestName(e.target.value, index) }}
                                    />
                                </motion.div>
                            }
                            <motion.hr variants={animatePresence} className={styles.hr} />
                        </motion.div>
                    )}
                    {family.length > 0 &&
                        <motion.div variants={animatePresence}>
                            <p>Drop us a comment!</p>
                            <textarea
                                onChange={(e) => { setComment(e.target.value) }}
                                className={styles.textarea}
                                id="comments"
                                name="Comments"
                                rows="5"
                                cols="45"
                                defaultValue={family[0].comment} />
                        </motion.div>
                    }
                    {family.length > 0 &&
                        <motion.div variants={animatePresence}>
                            <Button onClick={handleRsvpSubmit}>
                                Submit RSVP
                            </Button>
                        </motion.div>
                    }
                </motion.form>
            </Block>
        </div>
    )
}

export default Rsvp;