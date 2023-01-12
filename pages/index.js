import Head from 'next/head';
import Header from '../components/header';
import SocialsSideBar from '../components/socials-side-bar';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Graham</title>
      </Head>
      <Header/>
      <SocialsSideBar/>
    </>
  )
}