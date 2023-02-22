import styles from '@/styles/Home.module.css';
import Hero from '../public/graphics4.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.herosection}>
          <div className={styles.lefthero}>
            <span className={styles.smalldata}>The Freedom Is Here For Students!</span>
            <h1>
              Let The World Know <h1 className={styles.h1hero}>Your Voice Students.</h1>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia sunt temporibus obcaecati velit modi numquam quasi dolores, harum quod excepturi nemo ullam ipsum cupiditate facere culpa dicta consequatur est.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem soluta ratione eum deserunt at blanditiis perspiciatis dolorem vel quisquam id numquam eligendi perferendis aspernatur quibusdam, voluptates unde commodi culpa eaque.
            </p>
            <Link href='/browse' className={styles.btn}>Get Started</Link>
          </div>
          <div className={styles.righthero}>
            <Image src={Hero} alt="styles.Sorry, Image Cant Load Cuz Your Internet Connection Is Died... :)" />
          </div>
        </div>
      </div>
    </>
  )
}
