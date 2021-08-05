import Block from './Block';
import React from 'react';
import registry from './assets/registry.svg';
import linkStyles from './links.module.css';
import styles from './registry.module.css';
import crateAndBarrel from './assets/crateandbarrel.png';
import cash from './assets/cash.png'
import RegistryCard from './RegistryCard';

const Registry = (props) => {
    return (
        <Block blockTitle="Registry" {...props}>
            <img src={registry} alt="" style={{ height: '250px' }} />
            <div className={styles.text}>
                <p>The best present you could give is to join us in the celebration of our marriage. However, if you'd like to spoil us, we have
                    a gift registry through <a href="https://www.crateandbarrel.com/gift-registry/zach-hannum-and-bella-anderson/r6082663"
                        target="_blank"
                        rel="noreferrer"
                        className={linkStyles.link}>Crate and Barrel
                    </a>.
                </p>
            </div>
            {/*<div className={styles.grid}>
                        <RegistryCard image={crateAndBarrel}/>
             </div>*/}
        </Block>
    );
};

export default Registry;