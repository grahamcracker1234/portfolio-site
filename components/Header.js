import utilsStyles from "../styles/utils.module.scss";
import * as Icon from "react-feather";
import getAge from "../lib/getAge";
import Button from "./Button";

export default function Header() {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <section id="home" className="min-[900px]:ml-30 mx-auto flex h-screen w-full flex-col justify-center gap-10 px-4 xs:px-8 sm:max-w-md sm:px-4 md:ml-10 min-[850px]:ml-20 min-[950px]:ml-40 lg:ml-auto lg:max-w-xl xl:max-w-2xl xl:flex-row xl:items-center">
      <div className=" flex flex-col">
        <h1 className="mb-2 text-3xl font-black text-white xs:text-4xl sm:text-5xl lg:text-6xl">
          Hi <span className="inline-block animate-[6s_infinite_wave] [transform-origin:70%_70%]">👋</span>, I&apos;m <span className={`${utilsStyles.gradient} bg-clip-text `}>Graham</span>.
        </h1>
        <h2 className="mb-2 text-lg font-bold text-gray sm:text-xl lg:mb-4 lg:text-4xl">Developer. Designer. Student.</h2>
        <hr className={`${utilsStyles.gradient} mb-7 h-[0.1rem] w-full max-w-xs rounded sm:max-w-md lg:max-w-lg`}/>
        <p className="mb-10 max-w-md text-gray sm:max-w-lg lg:max-w-xl">A {getAge("2001-09-09")}-year-old developer who is passionate about competitive programming 🏆, game design 🎮, and software development 💻.</p>
        <Button href="#projects" className="flex flex-row gap-2">
          <Icon.Folder/>
          <span>View Featured Projects</span>
        </Button>
      </div>
      <a href="#about" className="max-w-min"><Icon.ChevronDown className="animate-bounce text-gray hover:text-white" size={48}/></a>
    </section>
  );
}