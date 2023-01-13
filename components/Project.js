import styles from './Project.module.scss';
import utilsStyles from '../styles/utils.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({ name, description, technologies, imageSrc, links, flip }) {
  return (
    <div className="relative py-12 xl:px-0 px-8 xl:overflow-visible overflow-hidden xl:rounded-none rounded-lg xl:items-center xl:grid grid-cols-5">
      <Image src={imageSrc} alt={name} fill={true} className={`transition-[filter_200ms_linear] xl:rounded-lg xl:h-[75%] xl:aspect-[2/1] ${flip ? "xl:col-start-3 xl:col-end-6" : "xl:col-start-1 xl:col-end-4"} xl:row-start-1 object-cover xl:blur-none blur-md brightness-50 xl:!relative w-full h-full`}></Image>
      <div className={`xl:py-8 ${flip ? "xl:col-start-1 xl:col-end-4" : "xl:col-start-3 xl:col-end-6"} xl:row-start-1 relative text-gray`}>
        <h3 className={`xl:text-gray ${!flip && "xl:text-right"} xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] drop-shadow-[0_0_1rem_rgba(0,0,0,1)] text-white font-bold xl:text-3xl text-2xl lg:mb-4 mb-2`}>{name}</h3>
        <p className={`transition-[filter_200ms_linear] xl:rounded xl:p-4 ${!flip && "xl:text-right"} xl:bg-evening xl:hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,0.5)] xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] drop-shadow-[0_0_1rem_rgba(0,0,0,1)] text-sm leading-5`}>{description}</p>
        <div className={`${!flip && "xl:flex-row-reverse"} mt-4 flex gap-2 flex-wrap text-sm`}>{technologies.map(t => 
          <span className="transition-[filter_200ms_linear] xl:bg-evening py-2 px-4 bg-midnight xl:hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,0.5)] xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] drop-shadow-[0_0_1rem_rgba(0,0,0,1)] rounded before:content-['#'] before:text-dark-gray before:mr-1" key={t}>{t}</span>
        )}</div>
        {links && <div className={`${!flip && "xl:flex-row-reverse"} mt-4 flex gap-2 flex-wrap`}>{links.map(({ Icon, href, name }) => 
          <Link className="transition-[filter_200ms_linear] hover:text-white xl:hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,0.5)] xl:drop-shadow-[0_0_1rem_rgba(0,0,0,0.1)] drop-shadow-[0_0_1rem_rgba(0,0,0,1)]" key={name} href={href} target="_blank" rel="noopener noreferrer"><Icon></Icon></Link>
        )}</div>}

      </div>
    </div>
  )
}