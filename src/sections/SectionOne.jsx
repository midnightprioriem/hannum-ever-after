import React from 'react';


import Venue from 'components/Venue';
import When from 'components/When';
import Registry from 'components/Registry';

import styles from 'sections/sectionone.module.css';

const SectionOne = (props) => {


    return (
        <div
            className={styles.root}>
            <Venue id='venue'/>
            <When id='when'/>
            <Registry id='registry' />
        </div>
    );
}

export default SectionOne;