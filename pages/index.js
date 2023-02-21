import styles from '@/styles/Home.module.css';
import Hero from '../public/graphics3.png';
import HerokeSathi from '../public/Incoreu.png';
import Pointer from '../public/pointer.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
     <section className={styles.section}>
      <div className={styles.twocol}>
      <div className={styles.left}>
        <div className={styles.been}>Welcome To Incoreu, Where Students Can Really Enjoy!</div>
        <hr />
        <h1 className={styles.h1}>Real Students Voices,<br /> Honest Reviews of Schools & Collages.</h1>
        <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores deserunt excepturi, quos officiis officia unde magnam, laborum aut quam suscipit nam, exercitationem necessitatibus. Ullam inventore culpa exercitationem repellendus nobis soluta?</p>
        <Link href='/' className={styles.btn}>Get Started</Link>
      </div>
      <div className={styles.right}>
        <Image src={Hero} alt="Internet Slow! :(" className={styles. hero}/>
      </div>
      </div>
     </section>
    </>
  )
}
