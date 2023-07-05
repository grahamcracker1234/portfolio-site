import Head from "next/head";
import SideBars from "../components/SideBars";
import Footer from "../components/Footer";
import React, { useState } from "react";
import getAge from "../lib/getAge";

export default function Archive() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <>
      <Head>
        <title>Graham B. Preston</title>
        <meta
          name="description"
          content={`A ${getAge("2001/09/09")}-year-old developer who is passionate about competitive programming 🏆, game design 🎮, and software development 💻.`}/>
      </Head>
      <SideBars state={[menuIsActive, setMenuIsActive]}/>
      <main className={`${menuIsActive && "blur-md"} transition-[filter]`}>
        <Footer/>
      </main>
    </>
  )
}