import Head from 'next/head';
import SideBars from '../components/SideBars';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import React, { useState } from 'react';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function getStaticProps() {
  const skills = ["Bash", "C#", "CSS", "HTML", "iOS-Development", "Java", "JavaScript", "Node.js", "npm", "PHP", "Python", "R", "Ruby", "Rust", "Sass", "SQL", "Swift", "TypeScript", "Front-End", "Back-End", "Full-Stack", "XML", "Web-Development", "Linux", "macOS", "Microsoft-Excel", "Microsoft-Powerpoint", "Microsoft-Word", "Unity", "Visual-Studio-Code", "Windows", "Xcode", "Next.js", "React", "Tailwind", "Git", "pnpm", "GitHub", "Game-Design", "Search-Engine-Optimization", "User-Experience-Design", "User-Interface-Design", "Adobe-After-Effects", "Adobe-Illustrator", "Adobe-Photoshop", "Adobe-Premier-Pro", "Vercel", "pandas", "NumPy"];

  return await { props: { skills: shuffle(skills) } };
}

export default function Home({ skills }) {
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
        <Skills rows={5} skills={skills}/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}