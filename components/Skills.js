import styles from "@/components/Skills.module.scss";
import Section from "@/components/Section";

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
        <span className="mr-4 h-min rounded bg-evening px-4 py-2 text-gray drop-shadow-[0_0_1rem_rgba(0,0,0,0.15)] transition-[filter_200ms_linear] before:mr-1 before:text-dark-gray before:content-['#'] hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,1)]" key={`${skill}-${i}`}>{skill}</span>
      )}</div>
  );
}

export default function Skills({ skills, rows, durationFactors }) {
  const maxChunkSize = Math.ceil(skills.length / rows);
  const chunks = chunk(skills, maxChunkSize);

  return (
    <Section id="skills" header="My skills 🛠️">
      <div className="relative mx-[-2rem] overflow-x-hidden">
        {chunks.map((skills, i) =>
          <SkillLine key={i} skills={skills} durationFactor={durationFactors[i]} flip={i % 2}/>
        )}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(90deg,#10101A,transparent_100%)]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(90deg,transparent_0%,#10101A)]"></div>
      </div>
    </Section>
  );
}