import Section from "./Section";
import * as Icon from "react-feather";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

function Project({ name, description, technologies, imageSrc, links, flip }) {
  return (
    <div className="relative grid-cols-5 overflow-hidden rounded-lg py-12 px-8 xl:grid xl:items-center xl:overflow-visible xl:rounded-none xl:px-0">
      <Image src={imageSrc} alt={name} fill={true} sizes="(min-width: 1536px) 561.6px, (min-width: 1280px) 410.4px, (min-width: 1024px) 576px, (min-width: 768px) 432px, (min-width: 640px) 432px, (min-width: 475px) 100vw, 100vw" className={`transition-[filter_200ms_linear] xl:aspect-[2/1] xl:h-[75%] xl:rounded-lg ${flip ? "xl:col-start-3 xl:col-end-6" : "xl:col-start-1 xl:col-end-4"} h-full w-full object-cover blur-md brightness-50 xl:!relative xl:row-start-1 xl:blur-none`}></Image>
      <div className={`xl:py-8 ${flip ? "xl:col-start-1 xl:col-end-4" : "xl:col-start-3 xl:col-end-6"} relative text-gray xl:row-start-1`}>
        <h3 className={`xl:text-gray ${!flip && "xl:text-right"} mb-2 text-2xl font-bold text-white drop-shadow-[0_0_1rem_rgba(0,0,0,1)] lg:mb-4 xl:text-3xl xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)]`}>{name}</h3>
        <p className={`transition-[filter_200ms_linear] xl:rounded xl:p-4 ${!flip && "xl:text-right"} text-sm leading-5 drop-shadow-[0_0_1rem_rgba(0,0,0,1)] xl:bg-evening xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] xl:hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,0.5)]`}>{description}</p>
        <div className={`${!flip && "xl:flex-row-reverse"} mt-4 flex flex-wrap gap-2 text-xs md:text-sm`}>{technologies.map(t => 
          <span className="rounded bg-midnight py-2 px-4 drop-shadow-[0_0_1rem_rgba(0,0,0,1)] transition-[filter_200ms_linear] before:mr-1 before:text-dark-gray before:content-['#'] xl:bg-evening xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] xl:hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,0.5)]" key={t}>{t}</span>
        )}</div>
        {links && <div className={`${!flip && "xl:flex-row-reverse"} mt-4 flex flex-wrap gap-2`}>{links.map(({ Icon, href, name }) => 
          <Link className="drop-shadow-[0_0_1rem_rgba(0,0,0,1)] transition-[filter_200ms_linear] hover:text-white xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] xl:hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,0.5)]" key={name} href={href} target="_blank" rel="noopener noreferrer"><Icon></Icon></Link>
        )}</div>}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" header="Featured projects 📁">
      <div className="flex flex-col items-center gap-8">
        <Project name="Multidimensional Renderer" description="A simple computer graphics renderer to visualize any higher spatial dimension with an n-dimensional hypercube rotating about all possible degrees-of-freedom." technologies={["HTML", "CSS", "JavaScript", "Canvas", "Open-Source"]} imageSrc="/images/renderer.png" links={[{Icon: Icon.GitHub, href: "https://github.com/grahamcracker1234/multidimensional-renderer", name: "GitHub"}, {Icon: Icon.ExternalLink, href: "https://grahamcracker1234.github.io/multidimensional-renderer/", name: "Demo"}]}/>
        <Project name="ColorBlox!" description="A puzzle-esque, arcade-style game requiring high-speed pattern recognition. Try my free mobile game on the iOS App Store, featuring two different game modes each with three difficulties and global leaderboards." technologies={["Swift", "iOS", "SpriteKit"]} imageSrc="/images/colorblox.png" links={[{Icon: Icon.ExternalLink, href: "https://apps.apple.com/us/app/colorblox/id1265656307", name: "App Store"}]} flip={true}/>
        <Project name="Portfolio Site" description="This website, which you are currently viewing, acts as a digital portfolio and an archive for all my projects. It is open sourced, so feel free to look at it on GitHub." technologies={["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Vercel", "Open-Source"]} imageSrc="/images/portfolio-site.png" links={[{Icon: Icon.GitHub, href: "https://github.com/grahamcracker1234/portfolio-site", name: "GitHub"}]}/>
        <Button href="https://github.com/grahamcracker1234?tab=repositories" target="_blank" rel="noopener noreferrer" className="mx-auto flex flex-row gap-2">
          <Icon.ExternalLink/>
          <span>More Projects</span>
        </Button>
      </div>
    </Section>
  )
}