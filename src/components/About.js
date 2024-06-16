import Image from "next/image";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" header="About me 🧑‍💻">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-4 xl:gap-8">
        <p className="text-xs leading-5 text-gray xl:text-sm xl:leading-6 2xl:text-base 2xl:leading-7">
          <span className="mb-4 block">Hello, stranger! My humble beginnings to programming began in 2013 with the high-level block-based visual programming language, <b>Scratch</b>. Eventually, after becoming quite popular on Scratch, I decided to move onto a <em>real</em> textual language and began learning <b>JavaScript</b> on <b>Khan Academy</b>.</span>
          <span className="mb-4 block">Ever since then, I have been obsessed with computers, technology, and programming. Fast-forward to today, I have <b>over a decade</b> of personal experience, and, in the pursuit of knowledge, I graduated summa cum laude from <b>Mount St. Mary&apos;s University</b> with a Bachelor of Science in Computer Science, Mathematics, Data Science, Cybersecurity, and French.</span>
          <span className="block">My main focus these days is building fun, interesting products and digital experiences for everyone to enjoy.</span>
        </p>
        <div className={`relative aspect-square size-64 transition-[filter] ease-out hover:drop-shadow-[0_0.5rem_1rem_rgba(0,0,0,0.5)] lg:size-52 xl:size-60 2xl:size-72`}>
          <Image src="/images/profile.png" alt="profile picture" fill={true} sizes="(min-width: 1536px) 324px, (min-width: 1280px) 270px, (min-width: 1024px) 234px, (min-width: 768px) 288px, (min-width: 640px) 288px, (min-width: 475px) 288px, 100vw" style={{clipPath: "url(#squircle)"}} ></Image>
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
    </Section>
  );
}