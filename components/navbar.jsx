import React from 'react';
import styles from './compostyles.module.css';
import Link from 'next/link';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import { BsPersonCircle } from 'react-icons/bs';

const Navbar = () => {
  function ChangeMode(){
    document.body.style.background = '#04383f';
    document.body.style.color = '#fcfffe';
    document.getElementById('dark').style.display = 'none';
    document.getElementById('light').style.display = 'block';
  }
  function ChangeModeAgain(){
    document.body.style.background = '#fcfffe';
    document.body.style.color = '#04383f';
    document.getElementById('dark').style.display = 'block';
    document.getElementById('light').style.display = 'none';
  }
  function ToggleAccInfo(){
    const Info = document.getElementById('AccInfo');
    if (Info.style.display === "flex") {
      Info.style.display = "none";
    } else {
      Info.style.display = "flex";
    }
  }
  return (
    <>
     <header className={styles.header}>
        <div className={styles.logo}>Incoreu.</div>
        <div className={styles.links}>
            <Link href='/' className={styles.a}>Browse</Link>
            <Link href='/' className={styles.a}>Write</Link>
            <div className={styles.icon} title="Change Mode's">
              <CiDark onClick={ChangeMode} id='dark'/>
            <CiLight onClick={ChangeModeAgain} className={styles.light} id='light'/>
            </div>
            <div className={styles.icon} title="Your Account" onClick={ToggleAccInfo}><BsPersonCircle/></div>
            <div className={styles.accinfo} id='AccInfo'>
              <h3>Hi, Arsh</h3>
              <p>You're Loged In</p>
              <Link href='/' className={styles.active}>Settings</Link>
            </div>
        </div>
     </header>
    </>
  )
}

export default Navbar
