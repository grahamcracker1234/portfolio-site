import styles from './About.module.scss';
import utilsStyles from '../styles/utils.module.scss';
import Image from 'next/image';
import getAge from '../lib/getAge';

export default function About() {
  return (
    <section id="about" className="2xl:max-w-4xl xl:max-w-2xl lg:max-w-xl lg:ml-auto min-[950px]:ml-40 min-[900px]:ml-30 min-[850px]:ml-20 md:ml-10 sm:max-w-md mx-auto w-full p-8 flex flex-col justify-center">
      <h2 className="text-white font-bold lg:text-4xl text-2xl lg:mb-4 mb-2">About me 🧑‍💻</h2>
      <hr className={`${utilsStyles.gradient} h-[0.1rem] 2xl:max-w-sm max-w-xs w-full mb-7 rounded`}/>
      <div className="flex items-center xl:gap-8 lg:gap-4 gap-8 lg:flex-row flex-col">
        <p className="text-gray 2xl:leading-7 2xl:text-base xl:leading-6 xl:text-sm text-xs leading-5">
          Hello, stranger! My humble beginnings to programming began in 2013 with the high-level block-based visual programming language, <b>Scratch</b>. Eventually, after becoming quite popular on Scratch, I decided to move onto a <em>real</em> textual language and began learning <b>JavaScript</b> on <b>Khan Academy</b>.
          <br className="mb-4"/>
          Ever since then, I had been obsessed with computers, technology, and programming. Fast-forward to today, I have nearly <b>{getAge("2013/07/01")} years</b> of personal experience, and, in the pursuit of knowledge, I am attending <b>Mount St. Mary&apos;s University</b> studying Computer Science, Mathematics, Cybersecurity, and French. 
          <br className="mb-4"/>
          My main focus these days is building fun and interesting products and digital experiences for both others and myself to enjoy.
        </p>
        <div className={`${styles.profile} relative 2xl:w-72 2xl:h-72 xl:w-60 xl:h-60 lg:w-52 lg:h-52 w-64 h-64 aspect-square`}>
          <Image src="/images/profile.png" alt="profile picture" fill="true" className={styles.profileImg}></Image>
          <svg height="0" width="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <clipPath id="squircle" clipPathUnits="objectBoundingBox">
              <path d="
                M 0, 0.5
                C 0, 0 0, 0 0.5, 0
                S 1, 0 1, 0.5
                  1, 1 0.5, 1
                  0, 1 0, 0.5"></path>
            </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}