import utilsStyles from '../styles/utils.module.scss';
import Project from './Project';
import * as Icon from 'react-feather';
import Button from './Button';

export default function Projects() {
  return (
    <section id="projects" className="2xl:max-w-4xl xl:max-w-2xl lg:max-w-xl lg:ml-auto min-[950px]:ml-40 min-[900px]:ml-30 min-[850px]:ml-20 md:ml-10 sm:max-w-md mx-auto w-full p-8 flex flex-col justify-center mb-20">
      <h2 className="text-white font-bold lg:text-4xl text-2xl lg:mb-4 mb-2">Featured projects 📁</h2>
      <hr className={`${utilsStyles.gradient} h-[0.1rem] 2xl:max-w-sm max-w-xs w-full mb-7 rounded`}/>
      <div className="flex flex-col gap-8 items-center">
        <Project name="Multidimensional Renderer" description="A simple computer graphic renderer to render any number of higher spatial dimensions with an n-dimensional hypercube rotating about all rotational degrees-of-freedom." technologies={["HTML", "CSS", "JavaScript", "Canvas", "Open-Source"]} imageSrc="/images/renderer.png" links={[{Icon: Icon.GitHub, href: "https://github.com/grahamcracker1234/multidimensional-renderer", name: "GitHub"}, {Icon: Icon.ExternalLink, href: "https://grahamcracker1234.github.io/multidimensional-renderer/", name: "Demo"}]}/>
        <Project name="ColorBlox!" description="A puzzle-esque, arcade-style game requiring high-speed pattern recognition. Featuring two different game modes each with three difficulties and a global leaderboard, try my free mobile game on the iOS App Store." technologies={["Swift", "iOS", "SpriteKit"]} imageSrc="/images/colorblox.png" links={[{Icon: Icon.ExternalLink, href: "https://apps.apple.com/us/app/colorblox/id1265656307", name: "App Store"}]} flip={true}/>
        <Project name="Portfolio Site" description="The website you are currently viewing, which acts as my digital portfolio and an archive for all my projects. It is open sourced so feel free to look at it on GitHub." technologies={["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Vercel", "Open-Source"]} imageSrc="/images/portfolio-site.png" links={[{Icon: Icon.GitHub, href: "https://github.com/grahamcracker1234/portfolio-site", name: "GitHub"}]}/>
        <Button text="More Projects" href="https://github.com/grahamcracker1234?tab=repositories" target="_blank" rel="noopener noreferrer" className="mx-auto"/>
      </div>
    </section>
  )
}