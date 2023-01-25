import utilsStyles from '../styles/utils.module.scss';
import styles from './Skills.module.scss';

function chunk(array, limit) {
  const numChunks = Math.ceil(array.length / limit);
  return Array.from(
    { length: numChunks },
    (_, i) => array.slice(i * array.length / numChunks, (i + 1) * array.length / numChunks)
  );
}

function SkillLine({ skills, flip, duration, durationFactor }) {
  const durationInSeconds = duration || 30;

  return (
    <div style={{
        "--duration": `${Math.round(durationInSeconds * (durationFactor || 1))}s`,
        "--direction": flip ? "reverse" : "normal"
      }} className={`${styles.loop} relative mt-4 flex w-max text-xs md:text-sm`}>{skills.concat(skills).map((skill, i) => 
      <span className="mr-4 h-min rounded bg-evening py-2 px-4 text-gray drop-shadow-[0_0_1rem_rgba(0,0,0,0.15)] transition-[filter_200ms_linear] before:mr-1 before:text-dark-gray before:content-['#'] hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,1)]" key={`${skill}-${i}`}>{skill}</span>
    )}</div>
  );
}

export default function Skills({ rows, skills, durationFactors }) {
  const maxChunkSize = Math.ceil(skills.length / rows);
  const chunks = chunk(skills, maxChunkSize);

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <section id="skills" className="min-[900px]:ml-30 mx-auto mb-20 flex w-full flex-col justify-center overflow-x-hidden p-8 sm:max-w-md md:ml-10 min-[850px]:ml-20 min-[950px]:ml-40 lg:ml-auto lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl">
      <h2 className="mb-2 text-2xl font-bold text-white lg:mb-4 lg:text-4xl">My skills 🛠️</h2>
        <hr className={`${utilsStyles.gradient} mb-7 h-[0.1rem] w-full max-w-xs rounded 2xl:max-w-sm`}/>

        <div className="relative mx-[-2rem]">
          {chunks.map((skills, i) => 
            <SkillLine key={i} skills={skills} durationFactor={durationFactors[i]} flip={i % 2}/>
          )}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(90deg,#10101A,transparent_100%)]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(90deg,transparent_0%,#10101A)]"></div>
          </div>
    </section>
  );
}