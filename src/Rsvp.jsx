import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Block from './Block';
import styles from './rsvp.module.css';
import SheetDB from 'sheetdb-js'

const Rsvp = (props) => {

    const [name, setName] = useState("");
    const [familyId, setFamilyId] = useState(-1);
    const [family, setFamily] = useState([]);

    const handleSearchName = (e) => {
        e.preventDefault();
        const [first, last] = name.trim().split(" ");
        console.log("first: " + first);
        console.log("last: " + last);
        SheetDB.read("https://sheetdb.io/api/v1/ysnwocbrmo583", {
            search: {
                first_name: first,
                last_name: last,
            }
        }).then((result) => {
            console.log(result);
            const [person] = result;
            setFamilyId(person.family_id);
            searchFamily();
        }, (error) => {
            console.log(error);
        });
    }

    const searchFamily = () => {
        SheetDB.read("https://sheetdb.io/api/v1/ysnwocbrmo583", {
            search: {
                family_id: familyId
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
            <Block blockTitle="RSVP" {...props}>
                <form className={styles.form} onSubmit={handleSearchName}>
                    <p>Enter your name to find your RSVP.</p>
                    <TextField
                        id="name"
                        label="Name" variant="outlined" fullWidth
                        onChange={e => setName(e.target.value)}
                        InputProps={{
                            className: styles.textInput,
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        size="medium"
                                        aria-label="submit name"
                                        onClick={handleSearchName}
                                    >
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </form>
                <form className={styles.form} onSubmit={handleRsvpSubmit} >
                {family.map(({id, first_name, last_name}) => <p key={id}>{first_name} {last_name}</p>)}
                </form>
            </Block>
        </div>
    )
}

export default Rsvp;