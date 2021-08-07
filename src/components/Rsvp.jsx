import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Checkbox } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Block from 'components/Block';
import styles from 'components/rsvp.module.css';
import SheetDB from 'sheetdb-js';

const Rsvp = (props) => {

    const [code, setCode] = useState("");
    const [family, setFamily] = useState([]);

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
        }, (error) => {
            console.log(error);
        });
    }

    const handleRsvpSubmit = (e) => {
        e.preventDefault();
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
                <form className={styles.form} onSubmit={handleRsvpSubmit} >
                    {family.map(({ id, first_name, last_name }) =>
                        <div className={styles.rsvpResponseDiv}>
                            <h2 key={id}>{first_name} {last_name}</h2>
                            <div className={styles.rsvpFlex}>
                                <p>Will be attending?*</p>
                                <div>
                                    <Checkbox required />
                                </div>
                            </div>
                            <hr className={styles.hr} />
                        </div>
                    )}
                </form>
            </Block>
        </div>
    )
}

export default Rsvp;