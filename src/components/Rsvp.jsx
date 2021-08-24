import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TextField, InputAdornment, IconButton, RadioGroup, FormControlLabel, Radio, CircularProgress } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { toast } from "react-toastify";
import sha1 from 'js-sha1';
import Button from 'components/Button';
import Block from 'components/Block';
import styles from 'components/rsvp.module.css';
import linkStyles from 'components/links.module.css';
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
    const [loading, setLoading] = useState(false);
    const animation = useAnimation();

    const handleIsAttendingCheckBox = (event, i) => {
        let newFamily = [...family];
        newFamily[i].is_attending = event.target.value;
        setFamily(newFamily);
    }

    const handleIsAttendingRehearsalCheckBox = (event, i) => {
        let newFamily = [...family];
        newFamily[i].is_attending_rehearsal = event.target.value;
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
        setLoading(true);
        const invitation_code = sha1(code.trim());
        api.get("/search?invitation_code=" + invitation_code).then((result) => {
            setLoading(false);
            console.log(result);
            if (result.data.length === 0) {
                toast.warn('😔 Invitation code not found, try again!');
            }
            else {
                setFamily(result.data);
                document.getElementById('rsvp').scrollIntoView({
                    behavior: 'smooth',
                    alignToTop: false,
                });
                animation.start("visible");
            }
        }, (error) => {
            setLoading(false);
            handleApiError(error);
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
            toast.success('👏 RSVP submitted, thank you for your response!');
            console.log(result);
            setFamily([]);
            setCode("");
        }, (error) => {
            handleApiError(error);
        });

    }

    const handleApiError = (error) => {
        if (error.reponse) {
            console.log('error.response');
            toast.error('😭 ' + error.response.status);
        }
        else if (error.request) {
            console.log('error.request');
            console.log(error.request);
            toast.error('😭 HTTP Request Error ' + error.request.status);
        }
        else {
            console.log('error.message');
            toast.error('😭 ' + error.message);
        }
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
                                    {loading ? <CircularProgress /> :
                                        <IconButton
                                            size="medium"
                                            aria-label="submit code"
                                            onClick={handleSearchCode}
                                        >
                                            <ArrowForwardIcon />
                                        </IconButton>}
                                </InputAdornment>
                        }} />
                    <p style={{ fontSize: "1em" }}>
                        <a className={linkStyles.link} href="mailto: zacharyhannum@gmail.com">
                            Having issues with RSVP?
                        </a>
                    </p>

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
                        is_invited_to_rehearsal,
                        is_attending_rehearsal,
                        allowed_guest,
                        is_bringing_guest,
                        guest_name,
                    }, index) =>
                        <motion.div key={id} className={styles.rsvpResponseDiv} variants={animatePresence}>
                            <h2 className={styles.h2} >{first_name} {last_name}</h2>
                            <div className={styles.rsvpFlex}>
                                <p className={styles.p}>Will {first_name} be attending the wedding?</p>
                                <div>
                                    <RadioGroup
                                        row
                                        style={{ minWidth: "150px" }}  
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
                            {is_invited_to_rehearsal === "TRUE" &&
                                <div className={styles.rsvpFlex}>
                                    <p className={styles.p}>Will {first_name} be attending the rehearsal dinner?</p>
                                    <div>
                                        <RadioGroup
                                            style={{ minWidth: "150px" }}   
                                            row
                                            aria-label="is-attending-rehearsal"
                                            name="is-attending-rehearsal"
                                            value={is_attending_rehearsal}
                                            onChange={(e) => { handleIsAttendingRehearsalCheckBox(e, index) }}>
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
                                </div>}
                            {allowed_guest === "TRUE" &&
                                <div className={styles.rsvpFlex}>
                                    <p className={styles.p}>
                                        Will {first_name} be bringing a guest?
                                    </p>
                                    <div>
                                        <RadioGroup
                                            row
                                            style={{ minWidth: "150px" }}  
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
                        <motion.div variants={animatePresence} style={{ margin: "10px" }}>
                            <p>Send us a message!</p>
                            <textarea
                                onChange={(e) => { setComment(e.target.value) }}
                                className={styles.textarea}
                                id="comments"
                                name="Comments"
                                rows="5"
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