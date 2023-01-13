import Head from 'next/head';
import SideBars from '../components/side-bars';
import Header from '../components/header';
import About from '../components/about';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Grahamcracker</title>
      </Head>
      <SideBars/>
      <Header/>
      <About/>
    </>
  )
}