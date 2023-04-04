import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Menu } from '../components/Menu'
import styles from '../styles/app.module.scss';
import Head from 'next/head'
import { Footer } from '../components/Footer';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const[checked, setChecked] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Chain</title>
      </Head>
      <main>
        
        <Component {...pageProps} />

      </main>
  </div>
  
  )
}
