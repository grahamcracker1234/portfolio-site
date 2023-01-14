import Head from 'next/head';
import SideBars from '../components/SideBars';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import React, { useRef } from 'react';

export default function Home({ allPostsData }) {
  const containerRef = useRef(null);

  return (
    <>
      <Head>
        <title>Grahamcracker</title>
      </Head>
      <SideBars containerRef={containerRef}/>
      <main ref={containerRef}>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}