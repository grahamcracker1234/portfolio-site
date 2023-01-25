import Link from 'next/link';
import * as Icon from 'react-feather';
import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" header="Contact me 🤙😄">
      <p className="mb-6 text-xs text-gray sm:text-base">I&apos;m always looking for new opportunities, so my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
      <ul className="text-gray">
        <li>
          <Link target="_blank" name="GitHub" rel="noopener noreferrer" href="https://github.com/grahamcracker1234" className="flex items-center justify-between gap-2 py-2 text-sm !no-underline hover:text-white hover:drop-shadow-[0_0_2rem_rgba(0,0,0,1)] sm:text-base">
            <span className="flex gap-2">
              <Icon.GitHub className="w-6"/>
              <span className="hidden min-[355px]:inline-block">GitHub</span>
            </span>
            <hr className="pointer-events-none mx-3 hidden w-full rounded border-2 border-dashed border-t-dark-gray text-transparent xs:inline-block"/>
            <span className="before:mr-1 before:text-dark-gray before:content-['@']">grahamcracker1234</span>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/grahampreston1234/" className="flex items-center justify-between gap-2 py-2 text-sm !no-underline hover:text-white hover:drop-shadow-[0_0_2rem_rgba(0,0,0,1)] sm:text-base">
            <span className="inline-flex gap-2">
              <Icon.Linkedin className="w-6"/>
              <span className="hidden min-[355px]:inline-block">LinkedIn</span>
            </span>
            <hr className="pointer-events-none mx-3 hidden w-full rounded border-2 border-dashed border-t-dark-gray text-transparent xs:inline-block"/>
            <span className="before:mr-1 before:text-dark-gray before:content-['@']">grahampreston1234</span>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="Twitter" rel="noopener noreferrer" href="https://twitter.com/grahamcracker9_/" className="flex items-center justify-between gap-2 py-2 text-sm !no-underline hover:text-white hover:drop-shadow-[0_0_2rem_rgba(0,0,0,1)] sm:text-base">
            <span className="inline-flex gap-2">
              <Icon.Twitter className="w-6"/>
              <span className="hidden min-[355px]:inline-block">Twitter</span>
            </span>
            <hr className="pointer-events-none mx-3 hidden w-full rounded border-2 border-dashed border-t-dark-gray text-transparent xs:inline-block"/>
            <span className="before:mr-1 before:text-dark-gray before:content-['@']">grahamcracker9_</span>
          </Link>
        </li>
        <li>
          <Link target="_blank" name="Email" rel="noopener noreferrer" href="mailto:g.b.preston@proton.me" className="flex items-center justify-between gap-2 py-2 text-sm !no-underline hover:text-white  hover:drop-shadow-[0_0_2rem_rgba(0,0,0,1)] sm:text-base">
            <span className="inline-flex gap-2">
              <Icon.Mail className="w-6"/>
              <span className="hidden min-[355px]:inline-block">Email</span>
            </span>
            <hr className="pointer-events-none mx-3 hidden w-full rounded border-2 border-dashed border-t-dark-gray text-transparent xs:inline-block"/>
            <span>g.b.preston@proton.me</span>
          </Link>
        </li>
      </ul>
    </Section>
  );
}