import utilsStyles from '../styles/utils.module.scss';
import styles from './side-bars.module.scss';
import * as Icon from 'react-feather';

export default function SideBars() {
  return (
    <ul className={`${styles.listPseudo} flex flex-col absolute right-20 bottom-20 top-20 text-gray invisible lg:visible items-center`}>
      <li name="GitHub" className={`${styles.hover} py-2`}>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/grahamcracker1234">
          <Icon.GitHub/>
        </a>
      </li>
      <li name="LinkedIn" className={`${styles.hover} py-2`}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/grahampreston1234/">
          <Icon.Linkedin/>
        </a>
      </li>
      <li name="Twitter" className={`${styles.hover} py-2`}>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/grahamcracker9_/">
          <Icon.Twitter/>
        </a>
      </li>
      <li name="Email" className={`${styles.hover} py-2`}>
        <a target="_blank" rel="noopener noreferrer" href="mailto:g.b.preston@proton.me">
          <Icon.Mail/>
        </a>
      </li>
    </ul>
  )
}