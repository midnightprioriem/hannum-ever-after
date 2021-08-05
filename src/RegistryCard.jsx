import React from 'react';
import styles from './registrycard.module.css';

const RegistryCard = ({image, link, ...props}) => {

  return (
    <div className={styles.div}>
    <a href={link} className={styles.a} target="_blank" rel="noreferrer">
    <img src={image} alt="" style={{width:'300px'}} />
    </a>
    </div>
  );
}

export default RegistryCard;