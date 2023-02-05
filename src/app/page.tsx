/** @jsxImportSource @emotion/react */
"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Search from '@/components/Search'
import MostVisited from '@/components/MostVisited';

const logo = '/google_logo.svg'


export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={logo} alt="logo" width={272} height={92} priority />
      <Search />
      <MostVisited />
    </main>
  )
}
