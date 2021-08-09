import React from 'react';
import Block from 'components/Block';
import styles from 'components/registry.module.css';

const Registry = (props) => {
    return (
        <Block blockTitle="Registry" {...props} button useHeight buttonText="view registry" buttonLink="https://www.crateandbarrel.com/gift-registry/zach-hannum-and-bella-anderson/r6082663">
            <div>
                <h2>Crate & Barrel</h2>
                <p className={styles.p}>The best present you could give is to join us in the celebration of our marriage. However, if you'd like to spoil us, we have
                    a gift registry through Crate and Barrel.</p>
            </div>
        </Block>
    );
};

export default Registry;