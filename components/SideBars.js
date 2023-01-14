import utilsStyles from '../styles/utils.module.scss';
import styles from './SideBars.module.scss';
import * as Icon from 'react-feather';
import Link from 'next/link';

export default function SideBars() {
  const menuClick = () => {
    const isActive = document.querySelector("#menuButton").classList.toggle("active");
    format();
  };

  const menuExit = () => {
    document.querySelector("#menuButton").classList.remove("active");
    format();
  };

  const format = () => {
    const isActive = document.querySelector("#menuButton").classList.contains("active");
    document.querySelector("#main").style.transition = "filter 200ms ease";
    if (isActive) {
      document.querySelector("#menu").style.transform = "none";
      document.querySelector("#menuFade").style.opacity = "15%";
      document.querySelector("#menuFade").style.pointerEvents = "all";
      document.querySelector("#menuBackground").style.transform = "none";
      document.querySelector("#menuBackground").style.filter = null;
      document.querySelector("#main").style.filter = "blur(12px)";
    } else {
      document.querySelector("#menu").style.transform = null;
      document.querySelector("#menuFade").style.opacity = "0";
      document.querySelector("#menuFade").style.pointerEvents = null;
      document.querySelector("#menuBackground").style.transform = null;
      document.querySelector("#menuBackground").style.filter = "none";
      document.querySelector("#main").style.filter = null;
    }
  }

  return (
    <>
      <button id="menuButton" onClick={menuClick} className="md:pointer-events-none md:hidden z-20 fixed top-0 right-0 m-6 p-2 hover:text-white text-gray bg-evening rounded drop-shadow-[0_0.1rem_0.1rem_rgba(0,0,0,0.75)]">
        <Icon.Menu/>
      </button>
      <div id="menuFade" onClick={menuExit} className="z-10 pointer-events-none md:hidden fixed top-0 bottom-0 right-0 left-0 bg-black opacity-0 transition-opacity"></div>
      <div id="menuBackground" style={{filter: "none"}} className="md:pointer-events-none md:hidden z-20 fixed top-0 bottom-0 right-0 w-48 bg-midnight transform-gpu translate-x-[100%] transition-[transform,filter] drop-shadow-[0.5rem_0_1rem_rgba(0,0,0,1)]">
        <button id="menuButton" onClick={menuExit} className="relative top-0 left-0 m-4 hover:text-white text-gray rounded drop-shadow-[0_0.1rem_0.1rem_rgba(0,0,0,0.75)]">
          <Icon.X/>
        </button>
      </div>
      <ul id="menu" className={`z-20 ${styles.listPseudo} ${styles.rightBar} max-[768px]:!visible max-[768px]:translate-x-[12.5rem] max-[768px]:transition-transform`}>
        <li>
          <a href="#home" name="Home" onClick={menuExit} className={`${styles.hover} py-2 block`}><Icon.Home/></a>
        </li>
        <li>
          <a href="#about" name="About" onClick={menuExit} className={`${styles.hover} py-2 block`}><Icon.User/></a>
        </li>
        <li>
          <a href="#projects" name="Projects" onClick={menuExit} className={`${styles.hover} py-2 block`}><Icon.Folder/></a>
        </li>
        <li>
          <a href="#contact" name="Contact" onClick={menuExit} className={`${styles.hover} py-2 block`}><Icon.Share2/></a>
        </li>
      </ul>
      <ul className={`${styles.listPseudo} ${styles.leftBar}`}>
        <li>
          <Link target="_blank" name="GitHub" rel="noopener noreferrer" href="https://github.com/grahamcracker1234" className={`${styles.hover} py-2 block`}>
            <Icon.GitHub/>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/grahampreston1234/" className={`${styles.hover} py-2 block`}>
            <Icon.Linkedin/>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="Twitter" rel="noopener noreferrer" href="https://twitter.com/grahamcracker9_/" className={`${styles.hover} py-2 block`}>
            <Icon.Twitter/>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="Email" rel="noopener noreferrer" href="mailto:g.b.preston@proton.me" className={`${styles.hover} py-2 block`}>
            <Icon.Mail/>
          </Link>
        </li>
      </ul>
    </>
  );
}