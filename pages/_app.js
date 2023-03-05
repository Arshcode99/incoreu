import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>WebRizen Studios | Web Design & Development Agency</title>
      <meta name="description" content="WebRizen Studios | Freelance Web Design & Development Agency" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    <Navbar/>
    <Component {...pageProps} />
  </>
}
