import React from 'react';
import styles from './compostyles.module.css';
import Link from 'next/link';
import { BsStar, BsFillStarFill } from 'react-icons/bs'

const Card = () => {
  return (
    <>
     <div className={styles.card}>
        <div className={styles.twocol}>
            <div className={styles.schoolLogo}>IMG</div>
            <div className={styles.texts}>
                <h3>Delhi Public School, Numaligarh - Assam, India.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nesciunt mollitia aliquid quidem asperiores rerum sit eveniet, hic nobis iure accusantium vero fuga quas molestiae omnis officia iste? Magnam, tempora!</p>
                <div className={styles.stars}>14:55 PM  ||   22-February-2023</div>
                <div className={styles.stars}>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsStar/>
                    <BsStar/>
                    </div>
                <Link href='/write' className={styles.btn}>Write Review</Link>
            </div>
        </div>
     </div>
    </>
  );
}

export default Card;
