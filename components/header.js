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
    <section className="lg:max-w-6xl container mx-auto lg:px-32 md:px-16 sm:px-8 xs:px-4 px-2 h-screen flex flex-col justify-center">
      <h1 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl mb-2">
        Hi 👋, I&apos;m <span className={`${utilsStyles.gradient} bg-clip-text `}>Graham</span>.
      </h1>
      <h2 className="text-gray font-bold lg:text-4xl md:text-2xl sm:text-xl text-lg lg:mb-4 md:mb-3 mb-2">Developer, Designer, & Student</h2>
      <hr className={`${utilsStyles.gradient} h-2 md:max-w-lg sm:max-w-md max-w-xs w-full mb-7 rounded`}/>
      <p className="text-gray max-w-lg mb-10">Hello, stranger! I&apos;m a {getAge("2001/09/09")}-year-old developer who is passionate about competitive programming 🏆, game design 🎮, and software development 🧑‍💻.</p>
      <button className={utilsStyles.button}>Projects</button>
      <Icon.ChevronDown className={`text-gray ${styles.arrow}`} size={48}/>
    </section>
  )
}