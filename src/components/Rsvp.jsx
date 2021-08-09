import React, { useState } from 'react';
import { animate, motion, useAnimation } from 'framer-motion';
import { TextField, InputAdornment, IconButton, Checkbox } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from 'components/Button';
import Block from 'components/Block';
import styles from 'components/rsvp.module.css';
import SheetDB from 'sheetdb-js';

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
    const animation = useAnimation();

    const handleIsAttendingCheckBox = (event, i) => {
        let newFamily = [...family];
        newFamily[i].is_attending = event.target.checked ? "TRUE" : "FALSE";
        setFamily(newFamily);
    }

    const handleIsBringingGuestCheckBox = (event, i) => {
        let newFamily = [...family];
        newFamily[i].is_bringing_guest = event.target.checked ? "TRUE" : "FALSE";
        setFamily(newFamily);
    }

    const handleSearchCode = (e) => {
        e.preventDefault();
        const invitation_code = code.trim();
        SheetDB.read("https://sheetdb.io/api/v1/ysnwocbrmo583", {
            search: {
                invitation_code: invitation_code,
            }
        }).then((result) => {
            console.log(result);
            setFamily(result);
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
        console.log(family);
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
                    {family.map(({ id, first_name, last_name, is_attending, allowed_guest, is_bringing_guest }, index) =>
                        <motion.div key={id} className={styles.rsvpResponseDiv} variants={animatePresence}>
                            <h2 className={styles.h2} >{first_name} {last_name}</h2>
                            <div className={styles.rsvpFlex}>
                                <p className={styles.p}>Will be attending?*</p>
                                <div>
                                    <Checkbox checked={is_attending === "TRUE"} required onChange={(e) => handleIsAttendingCheckBox(e, index)} />
                                </div>
                            </div>
                            {allowed_guest === "TRUE" &&
                                <div className={styles.rsvpFlex}>
                                    <p className={styles.p}>Bringing guest?</p>
                                    <div>
                                        <Checkbox required onChange={(e) => handleIsBringingGuestCheckBox(e, index)} />
                                    </div>
                                </div>
                            }
                            {is_bringing_guest === "TRUE" &&
                                <motion.div variants={animatePresence} initial="hidden" animate="visible" className={styles.rsvpFlex}>
                                    <TextField
                                        id="guest_name"
                                        fullWidth
                                        required
                                        label="Guest Name" variant="outlined"
                                    />
                                </motion.div>
                            }
                            <motion.hr variants={animatePresence} className={styles.hr} />
                        </motion.div>
                    )}
                    {family.length > 0 && <motion.div variants={animatePresence}><Button onClick={handleRsvpSubmit}>Submit RSVP</Button></motion.div>}
                </motion.form>
            </Block>
        </div>
    )
}

export default Rsvp;