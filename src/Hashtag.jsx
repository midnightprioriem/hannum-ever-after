import React from 'react';
import Block from './Block';
import styles from './hashtag.module.css'

const Hashtag = () => {
    return (
        <div className={styles.root}>
            <Block>
                <p className={styles.hashtag}>#hannumeverafter</p>
            </Block>
        </div>
    )
}

export default Hashtag;