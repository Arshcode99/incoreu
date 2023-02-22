import React from 'react'
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/card';

const Browse = () => {
  return (
    <>
     <div className={styles.containerBrowse}>
      <Card/>
     </div>
    </>
  )
}

export default Browse
