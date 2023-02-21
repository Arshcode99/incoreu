import React from 'react';
import styles from './compostyles.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
     <header className={styles.header}>
        <div className={styles.logo}>Incoreu.</div>
        <div className={styles.links}>
            <Link href='/' className={styles.a}>Browse</Link>
            <Link href='/' className={styles.a}>Write</Link>
            <Link href='/' className={styles.active}>Account</Link>
        </div>
     </header>
    </>
  )
}

export default Navbar
