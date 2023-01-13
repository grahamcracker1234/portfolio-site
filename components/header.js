import utilsStyles from '../styles/utils.module.scss';
import styles from './header.module.scss';
import * as Icon from 'react-feather';


function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default function Header() {
  return (
    <section id="home" className="lg:max-w-xl lg:ml-auto min-[950px]:ml-40 min-[900px]:ml-30 min-[850px]:ml-20 md:ml-10 sm:max-w-md w-full mx-auto sm:px-4 xs:px-8 px-4 h-screen flex flex-col justify-center">
      <h1 className="text-white font-black lg:text-6xl sm:text-5xl xs:text-4xl text-3xl mb-2">
        Hi 👋, I&apos;m <span className={`${utilsStyles.gradient} bg-clip-text `}>Graham</span>.
      </h1>
      <h2 className="text-gray font-bold lg:text-4xl sm:text-xl text-lg lg:mb-4 mb-2">Developer, Designer, & Student</h2>
      <hr className={`${utilsStyles.gradient} h-[0.1rem] lg:max-w-lg sm:max-w-md max-w-xs w-full mb-7 rounded`}/>
      <p className="text-gray lg:max-w-xl sm:max-w-lg max-w-md mb-10">A {getAge("2001/09/09")}-year-old developer who is passionate about competitive programming 🏆, game design 🎮, and software development 💻.</p>
      <button className={utilsStyles.button}>Featured Projects</button>
      <Icon.ChevronDown className={`text-gray ${styles.arrow}`} size={48}/>
    </section>
  );
}