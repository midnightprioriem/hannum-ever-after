import React from 'react';
import Button from './Button';
// @ts-ignore
import styles from './block.module.css'

const Block = (props) => {
    const { blockTitle, id, button, buttonLink, buttonText } = props;

    return (
        <div className={styles.root} id={id} >
            <div className={styles.contentDiv}>
                <h1>{blockTitle}</h1>
                {blockTitle && <hr className={styles.hr} />}
                {props.children}
            </div>
            {button && <Button href={buttonLink}>{buttonText}</Button>}
        </div>
    );
};

export default Block;