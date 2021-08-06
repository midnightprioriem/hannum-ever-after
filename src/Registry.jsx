import Block from './Block';
import React from 'react';
import styles from './registry.module.css';

const Registry = (props) => {
    return (
        <Block blockTitle="Registry" {...props} button buttonText="view registry">
            <div>
                <h2>Create & Barrel</h2>
                <p className={styles.p}>The best present you could give is to join us in the celebration of our marriage. However, if you'd like to spoil us, we have
                    a gift registry through Crate and Barrel.</p>
            </div>
        </Block>
    );
};

export default Registry;