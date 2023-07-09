import SideBars from "@/components/SideBars";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
// import React, { useState } from "react";

export default function Home() {
  return (
    <>
      <SideBars/>
      {/* <main className={`${menuIsActive && "blur-md"} transition-[filter]`}> */}
      <main>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}