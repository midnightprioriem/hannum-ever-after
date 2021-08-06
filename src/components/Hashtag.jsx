import React from 'react';
import Block from 'components/Block';
import styles from 'components/hashtag.module.css'

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