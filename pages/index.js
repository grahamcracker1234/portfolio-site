import Head from 'next/head';
import SideBars from '../components/SideBars';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import React, { useState } from 'react';

export default function Home({ allPostsData }) {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <>
      <Head>
        <title>Grahamcracker</title>
      </Head>
      <SideBars state={[menuIsActive, setMenuIsActive]}/>
      <main className={`${menuIsActive && "blur-md"} filter 200ms ease`}>
        <Header/>
        <About/>
        <Skills rows={5}/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}