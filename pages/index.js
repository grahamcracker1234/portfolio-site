import Head from 'next/head';
import Header from '../components/header';
import SideBars from '../components/side-bars';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Graham</title>
      </Head>
      <SideBars/>
      <Header/>
    </>
  )
}