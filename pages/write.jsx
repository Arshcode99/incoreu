import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import WriteHero from '../public/graphics1.png';
import Link from 'next/link';

const Write = () => {
  return (
    <div className={styles.containerBrowse}>
      <div className={styles.herosection}>
      <div className={styles.form}>
      <h1>Write You're Review Here Without Any Fear!</h1>
      <hr />
      <br />
        <form>
            <label htmlFor="ChooseInstitution">Choose Institution*</label>
            <select name="ChooseInstitution" id="ChooseInstitution" required>
                <option value="Select">Select</option>
                <option value="School1">School1</option>
                <option value="School2">School2</option>
                <option value="School3">School3</option>
                <option value="School4">School4</option>
                <option value="School5">School5</option>
                <option value="School6">School6</option>
                <option value="School7">School7</option>
                <option value="School8">School8</option>
                <option value="School9">School9</option>
                <option value="School10">School10</option>
                <option value="School11">School11</option>
                <option value="School12">School12</option>
                <option value="School13">School13</option>
            </select>
            <label htmlFor="Ratings">Ratings*</label>
            <div className={styles.ratings}>
            <input type="checkbox" name="Ratings" />
            <input type="checkbox" name="Ratings" />
            <input type="checkbox" name="Ratings" />
            <input type="checkbox" name="Ratings" />
            <input type="checkbox" name="Ratings" />
            </div>
            <label htmlFor="Review">Tell The World What You Think About Your School Or Collage*</label>
            <textarea name="Review" id="Review" cols="30" rows="10" required></textarea>
            <p>By Posting Your Review In Our Platform You Are Agreed That What You Have Written In Our Platform Is Upto Our Terms Of Services And Guidlines.</p>
            <button>Post In Feed</button>
        </form>
      </div>
      <div className={styles.rightheroNext }>
      </div>
      </div>
     </div>
  );
}

export default Write;
