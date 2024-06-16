"use client";

import styles from "@/components/SideBars.module.scss";
import * as Icon from "react-feather";
import Link from "next/link";
import { useState } from "react";

export default function SideBars() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const menuClick = () => setMenuIsActive(true);
  const menuExit = () => setMenuIsActive(false);

  return (
    <>
      <button onClick={menuClick} className="fixed right-0 top-0 z-20 m-6 rounded bg-evening p-2 text-gray drop-shadow-[0_0.1rem_0.1rem_rgba(0,0,0,0.75)] hover:text-white md:pointer-events-none md:hidden">
        <Icon.Menu/>
      </button>
      <div onClick={menuExit} className={`${menuIsActive ? "pointer-events-auto bg-black/20 backdrop-blur-md" : "pointer-events-none bg-transparent backdrop-blur-none"} fixed inset-0 z-10 transition-[backdrop,background]`}></div>
      <div className={`${menuIsActive ? "transform-none drop-shadow-[0.5rem_0_1rem_rgba(0,0,0,1)]" : "translate-x-full transform-gpu"} fixed inset-y-0 right-0 z-20 w-48 bg-midnight transition-[transform,filter] md:pointer-events-none md:hidden `}>
        <button onClick={menuExit} className="relative left-0 top-0 m-4 rounded text-gray drop-shadow-[0_0.1rem_0.1rem_rgba(0,0,0,0.75)] hover:text-white">
          <Icon.X/>
        </button>
      </div>
      <ul className={`z-20 ${styles.listPseudo} ${styles.rightBar} ${menuIsActive ? "transform-none" : "max-[767px]:translate-x-[12.5rem]"} max-[767px]:!visible max-[767px]:transition-transform`}>
        <li>
          <a href="#home" name="Home" onClick={menuExit} className={`${styles.hover} block py-2`}><Icon.Home/></a>
        </li>
        <li>
          <a href="#about" name="About" onClick={menuExit} className={`${styles.hover} block py-2`}><Icon.User/></a>
        </li>
        <li>
          <a href="#skills" name="Skills" onClick={menuExit} className={`${styles.hover} block py-2`}><Icon.Tool/></a>
        </li>
        <li>
          <a href="#projects" name="Projects" onClick={menuExit} className={`${styles.hover} block py-2`}><Icon.Folder/></a>
        </li>
        <li>
          <a href="#contact" name="Contact" onClick={menuExit} className={`${styles.hover} block py-2`}><Icon.Share2/></a>
        </li>
      </ul>
      <ul className={`${styles.listPseudo} ${styles.leftBar}`}>
        <li>
          <Link target="_blank" name="GitHub" rel="noopener noreferrer" href="https://github.com/grahamcracker1234" className={`${styles.hover} block py-2`}>
            <Icon.GitHub/>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/grahampreston1234/" className={`${styles.hover} block py-2`}>
            <Icon.Linkedin/>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="Twitter" rel="noopener noreferrer" href="https://twitter.com/grahamcracker9_/" className={`${styles.hover} block py-2`}>
            <Icon.Twitter/>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="Email" rel="noopener noreferrer" href="mailto:g.b.preston@proton.me" className={`${styles.hover} block py-2`}>
            <Icon.Mail/>
          </Link>
        </li>
      </ul>
    </>
  );
}