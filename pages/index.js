import Head from "next/head";
import SideBars from "../components/SideBars";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import getAge from "../lib/getAge";
import React, { useState } from "react";

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function getStaticProps() {
  const skills = ["Bash", "C#", "CSS", "HTML", "iOS-Development", "Java", "JavaScript", "Node.js", "npm", "PHP", "Python", "R", "Ruby", "Rust", "Sass", "SQL", "Swift", "TypeScript", "Front-End", "Back-End", "Full-Stack", "XML", "Web-Development", "Linux", "macOS", "Microsoft-Excel", "Microsoft-Powerpoint", "Microsoft-Word", "Unity", "Visual-Studio-Code", "Windows", "Xcode", "Next.js", "React", "Tailwind", "Git", "pnpm", "GitHub", "Game-Design", "Search-Engine-Optimization", "User-Experience-Design", "User-Interface-Design", "Adobe-After-Effects", "Adobe-Illustrator", "Adobe-Photoshop", "Adobe-Premier-Pro", "Vercel", "pandas", "NumPy"];
  const rows = 5;
  const durationFactors = [...Array(rows)].map(_ => randomNumber(0.85, 1.15));

  return await { props: { skills: shuffle(skills), rows, durationFactors } };
}

export default function Home({ skills, rows, durationFactors }) {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <>
      <Head>
        <title>Graham B. Preston</title>
        <meta
          name="description"
          content={`A ${getAge("2001-09-09")}-year-old developer who is passionate about competitive programming 🏆, game design 🎮, and software development 💻.`}/>
      </Head>
      <SideBars state={[menuIsActive, setMenuIsActive]}/>
      <main className={`${menuIsActive && "blur-md"} transition-[filter]`}>
        <Header/>
        <About/>
        <Skills skills={skills} rows={rows} durationFactors={durationFactors} />
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}