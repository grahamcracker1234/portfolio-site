import utilsStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import * as Icon from 'react-feather';

export default function Contact() {
  return (
    <section id="contact" className="2xl:max-w-4xl xl:max-w-2xl lg:max-w-xl lg:ml-auto min-[950px]:ml-40 min-[900px]:ml-30 min-[850px]:ml-20 md:ml-10 sm:max-w-md mx-auto w-full p-8 flex flex-col justify-center mb-20">
      <h2 className="text-white font-bold lg:text-4xl text-2xl lg:mb-4 mb-2">Contact me 🤙😄</h2>
      <hr className={`${utilsStyles.gradient} h-[0.1rem] 2xl:max-w-sm max-w-xs w-full mb-7 rounded`}/>
      <p className="text-gray mb-6 sm:text-base text-xs">I&apos;m always looking for new opportunities, so my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
      <ul className="text-gray">
        <li>
          <Link target="_blank" name="GitHub" rel="noopener noreferrer" href="https://github.com/grahamcracker1234" className="py-2 flex gap-2 items-center justify-between sm:text-base text-sm !no-underline hover:drop-shadow-[0_0_2rem_rgba(0,0,0,1)] hover:text-white">
            <span className="flex gap-2">
              <Icon.GitHub className="w-6"/>
              <span className="min-[355px]:inline-block hidden">GitHub</span>
            </span>
            <hr className="pointer-events-none w-full mx-3 rounded border-t-dark-gray border-2 border-dashed text-transparent xs:inline-block hidden"/>
            <span className="before:content-['@'] before:text-dark-gray before:mr-1">grahamcracker1234</span>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/grahampreston1234/" className="py-2 flex gap-2 items-center justify-between sm:text-base text-sm !no-underline hover:drop-shadow-[0_0_2rem_rgba(0,0,0,1)] hover:text-white">
            <span className="inline-flex gap-2">
              <Icon.Linkedin className="w-6"/>
              <span className="min-[355px]:inline-block hidden">LinkedIn</span>
            </span>
            <hr className="pointer-events-none w-full mx-3 rounded border-t-dark-gray border-2 border-dashed text-transparent xs:inline-block hidden"/>
            <span className="before:content-['@'] before:text-dark-gray before:mr-1">grahampreston1234</span>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="Twitter" rel="noopener noreferrer" href="https://twitter.com/grahamcracker9_/" className="py-2 flex gap-2 items-center justify-between sm:text-base text-sm !no-underline hover:drop-shadow-[0_0_2rem_rgba(0,0,0,1)] hover:text-white">
            <span className="inline-flex gap-2">
              <Icon.Twitter className="w-6"/>
              <span className="min-[355px]:inline-block hidden">Twitter</span>
            </span>
            <hr className="pointer-events-none w-full mx-3 rounded border-t-dark-gray border-2 border-dashed text-transparent xs:inline-block hidden"/>
            <span className="before:content-['@'] before:text-dark-gray before:mr-1">grahamcracker9_</span>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="Email" rel="noopener noreferrer" href="mailto:g.b.preston@proton.me" className="py-2 flex gap-2 items-center justify-between sm:text-base text-sm !no-underline">
            <span className="inline-flex gap-2 hover:drop-shadow-[0_0_2rem_rgba(0,0,0,1)] hover:text-white">
              <Icon.Mail className="w-6"/>
              <span className="min-[355px]:inline-block hidden">Email</span>
            </span>
            <hr className="pointer-events-none w-full mx-3 rounded border-t-dark-gray border-2 border-dashed text-transparent xs:inline-block hidden"/>
            <span>g.b.preston@proton.me</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}