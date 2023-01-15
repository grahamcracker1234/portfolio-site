import utilsStyles from '../styles/utils.module.scss';
import * as Icon from 'react-feather';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

function Project({ name, description, technologies, imageSrc, links, flip }) {
  return (
    <div className="relative py-12 xl:px-0 px-8 xl:overflow-visible overflow-hidden xl:rounded-none rounded-lg xl:items-center xl:grid grid-cols-5">
      <Image src={imageSrc} alt={name} fill={true} className={`transition-[filter_200ms_linear] xl:rounded-lg xl:h-[75%] xl:aspect-[2/1] ${flip ? "xl:col-start-3 xl:col-end-6" : "xl:col-start-1 xl:col-end-4"} xl:row-start-1 object-cover xl:blur-none blur-md brightness-50 xl:!relative w-full h-full`}></Image>
      <div className={`xl:py-8 ${flip ? "xl:col-start-1 xl:col-end-4" : "xl:col-start-3 xl:col-end-6"} xl:row-start-1 relative text-gray`}>
        <h3 className={`xl:text-gray ${!flip && "xl:text-right"} xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] drop-shadow-[0_0_1rem_rgba(0,0,0,1)] text-white font-bold xl:text-3xl text-2xl lg:mb-4 mb-2`}>{name}</h3>
        <p className={`transition-[filter_200ms_linear] xl:rounded xl:p-4 ${!flip && "xl:text-right"} xl:bg-evening xl:hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,0.5)] xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] drop-shadow-[0_0_1rem_rgba(0,0,0,1)] text-sm leading-5`}>{description}</p>
        <div className={`${!flip && "xl:flex-row-reverse"} mt-4 flex gap-2 flex-wrap md:text-sm text-xs`}>{technologies.map(t => 
          <span className="transition-[filter_200ms_linear] xl:bg-evening py-2 px-4 bg-midnight xl:hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,0.5)] xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] drop-shadow-[0_0_1rem_rgba(0,0,0,1)] rounded before:content-['#'] before:text-dark-gray before:mr-1" key={t}>{t}</span>
        )}</div>
        {links && <div className={`${!flip && "xl:flex-row-reverse"} mt-4 flex gap-2 flex-wrap`}>{links.map(({ Icon, href, name }) => 
          <Link className="transition-[filter_200ms_linear] hover:text-white xl:hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,0.5)] xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] drop-shadow-[0_0_1rem_rgba(0,0,0,1)]" key={name} href={href} target="_blank" rel="noopener noreferrer"><Icon></Icon></Link>
        )}</div>}

      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="2xl:max-w-4xl xl:max-w-2xl lg:max-w-xl lg:ml-auto min-[950px]:ml-40 min-[900px]:ml-30 min-[850px]:ml-20 md:ml-10 sm:max-w-md mx-auto w-full p-8 flex flex-col justify-center mb-20">
      <h2 className="text-white font-bold lg:text-4xl text-2xl lg:mb-4 mb-2">Featured projects 📁</h2>
      <hr className={`${utilsStyles.gradient} h-[0.1rem] 2xl:max-w-sm max-w-xs w-full mb-7 rounded`}/>
      <div className="flex flex-col gap-8 items-center">
        <Project name="Multidimensional Renderer" description="A simple computer graphics renderer to visualize any higher spatial dimension with an n-dimensional hypercube rotating about all possible degrees-of-freedom." technologies={["HTML", "CSS", "JavaScript", "Canvas", "Open-Source"]} imageSrc="/images/renderer.png" links={[{Icon: Icon.GitHub, href: "https://github.com/grahamcracker1234/multidimensional-renderer", name: "GitHub"}, {Icon: Icon.ExternalLink, href: "https://grahamcracker1234.github.io/multidimensional-renderer/", name: "Demo"}]}/>
        <Project name="ColorBlox!" description="A puzzle-esque, arcade-style game requiring high-speed pattern recognition. Try my free mobile game on the iOS App Store, featuring two different game modes each with three difficulties and a global leaderboard." technologies={["Swift", "iOS", "SpriteKit"]} imageSrc="/images/colorblox.png" links={[{Icon: Icon.ExternalLink, href: "https://apps.apple.com/us/app/colorblox/id1265656307", name: "App Store"}]} flip={true}/>
        <Project name="Portfolio Site" description="This website, which you are currently viewing, acts as a digital portfolio and an archive for all my projects. It is open sourced, so feel free to look at it on GitHub." technologies={["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Vercel", "Open-Source"]} imageSrc="/images/portfolio-site.png" links={[{Icon: Icon.GitHub, href: "https://github.com/grahamcracker1234/portfolio-site", name: "GitHub"}]}/>
        <Button text="More Projects" href="https://github.com/grahamcracker1234?tab=repositories" target="_blank" rel="noopener noreferrer" className="mx-auto"/>
      </div>
    </section>
  )
}