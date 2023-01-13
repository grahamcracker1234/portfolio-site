import utilsStyles from '../styles/utils.module.scss';
import styles from './side-bars.module.scss';
import * as Icon from 'react-feather';
import Link from 'next/link';

export default function SideBars() {
  return (
    <>
      <ul className={`${styles.listPseudo} ${styles.rightBar}`}>
        <li>
          <a href="#home" name="Home" className={`${styles.hover} py-2 block`}><Icon.Home/></a>
        </li>
        <li>
          <a href="#about" name="About" className={`${styles.hover} py-2 block`}><Icon.User/></a>
        </li>
        <li>
          <a href="#projects" name="Projects" className={`${styles.hover} py-2 block`}><Icon.Folder/></a>
        </li>
        <li>
          <a href="#contact" name="Contact" className={`${styles.hover} py-2 block`}><Icon.Share2/></a>
        </li>
      </ul>
      <ul className={`${styles.listPseudo} ${styles.leftBar}`}>
        <li>
          <a target="_blank" name="GitHub" rel="noopener noreferrer" href="https://github.com/grahamcracker1234" className={`${styles.hover} py-2 block`}>
            <Icon.GitHub/>
          </a>
        </li>
        <li>
          <a target="_blank" name="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/grahampreston1234/" className={`${styles.hover} py-2 block`}>
            <Icon.Linkedin/>
          </a>
        </li>
        <li>
          <a target="_blank" name="Twitter" rel="noopener noreferrer" href="https://twitter.com/grahamcracker9_/" className={`${styles.hover} py-2 block`}>
            <Icon.Twitter/>
          </a>
        </li>
        <li>
          <a target="_blank" name="Email" rel="noopener noreferrer" href="mailto:g.b.preston@proton.me" className={`${styles.hover} py-2 block`}>
            <Icon.Mail/>
          </a>
        </li>
      </ul>
    </>
  );
}