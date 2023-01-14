import utilsStyles from '../styles/utils.module.scss';
import styles from './Header.module.scss';
import * as Icon from 'react-feather';
import getAge from '../lib/getAge';
import Button from './Button';

export default function Header() {
  return (
    <section id="home" className="xl:max-w-2xl lg:max-w-xl lg:ml-auto min-[950px]:ml-40 min-[900px]:ml-30 min-[850px]:ml-20 md:ml-10 sm:max-w-md w-full mx-auto sm:px-4 xs:px-8 px-4 h-screen flex flex-col justify-center gap-10 xl:flex-row xl:items-center">
      <div className=" flex flex-col">
        <h1 className="text-white font-black lg:text-6xl sm:text-5xl xs:text-4xl text-3xl mb-2">
          Hi <span className={styles.wave}>👋</span>, I&apos;m <span className={`${utilsStyles.gradient} bg-clip-text `}>Graham</span>.
        </h1>
        <h2 className="text-gray font-bold lg:text-4xl sm:text-xl text-lg lg:mb-4 mb-2">Developer. Designer. Student.</h2>
        <hr className={`${utilsStyles.gradient} h-[0.1rem] lg:max-w-lg sm:max-w-md max-w-xs w-full mb-7 rounded`}/>
        <p className="text-gray lg:max-w-xl sm:max-w-lg max-w-md mb-10">A {getAge("2001/09/09")}-year-old developer who is passionate about competitive programming 🏆, game design 🎮, and software development 💻.</p>
        <Button text="View Featured Projects" href="#projects"/>
      </div>
      <a href="#about" className="hover:text-white max-w-min"><Icon.ChevronDown className={`text-gray ${styles.arrow}`} size={48}/></a>
    </section>
  );
}