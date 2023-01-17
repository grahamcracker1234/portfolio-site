import utilsStyles from '../styles/utils.module.scss';
import styles from './Skills.module.scss';

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

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
      }} className={`${styles.loop} mt-4 flex md:text-sm text-xs relative w-max`}>{skills.concat(skills).map((skill, i) => 
      <span className="mr-4 h-min text-gray transition-[filter_200ms_linear] bg-evening py-2 px-4 hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,1)] drop-shadow-[0_0_1rem_rgba(0,0,0,0.15)] rounded before:content-['#'] before:text-dark-gray before:mr-1" key={`${skill}-${i}`}>{skill}</span>
    )}</div>
  );
}

export default function Skills({ rows, skills }) {
  const maxChunkSize = Math.ceil(skills.length / rows);
  const chunks = chunk(skills, maxChunkSize);

  return (
    <section id="skills" className="2xl:max-w-4xl xl:max-w-2xl lg:max-w-xl lg:ml-auto min-[950px]:ml-40 min-[900px]:ml-30 min-[850px]:ml-20 md:ml-10 sm:max-w-md mx-auto w-full p-8 flex flex-col justify-center mb-20 overflow-x-hidden">
      <h2 className="text-white font-bold lg:text-4xl text-2xl lg:mb-4 mb-2">My skills 🛠️</h2>
        <hr className={`${utilsStyles.gradient} h-[0.1rem] 2xl:max-w-sm max-w-xs w-full mb-7 rounded`}/>

        <div className="mx-[-2rem] relative">
          {chunks.map((skills, i) => 
            <SkillLine key={i} skills={skills} durationFactor={randomNumber(0.85, 1.15)} flip={i % 2}/>
          )}
          <div className="absolute top-0 bottom-0 left-0 w-10 bg-[linear-gradient(90deg,#10101A,transparent_100%)] pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-10 bg-[linear-gradient(90deg,transparent_0%,#10101A)] pointer-events-none"></div>
          </div>
    </section>
  );
}