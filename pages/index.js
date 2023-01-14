import Head from 'next/head';
import SideBars from '../components/SideBars';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Grahamcracker</title>
      </Head>
      <SideBars/>
      <main id="main">
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}