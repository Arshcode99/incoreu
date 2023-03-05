import Image from 'next/image';
import React from 'react';
import styles from './comonents.module.css';
import LogoAni from '../public/loading.gif';

const Loader = () => {
  return (
    <>
     <div className={styles.Loader}>
    <Image src={LogoAni} alt="WebRizen Studios" title='WebRizen Studios'/>    
    </div> 
    </>
  );
}

export default Loader;
