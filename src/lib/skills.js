import "server-only";
import { cache } from "react";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export const getData = cache(async () => {
  const skills = ["Bash", "C#", "CSS", "HTML", "iOS-Development", "Java", "JavaScript", "Node.js", "npm", "PHP", "Python", "R", "Ruby", "Rust", "Sass", "SQL", "Swift", "TypeScript", "Front-End", "Back-End", "Full-Stack", "XML", "Web-Development", "Linux", "macOS", "Microsoft-Excel", "Microsoft-Powerpoint", "Microsoft-Word", "Unity", "Visual-Studio-Code", "Windows", "Xcode", "Next.js", "React", "Tailwind", "Git", "pnpm", "GitHub", "Game-Design", "Search-Engine-Optimization", "User-Experience-Design", "User-Interface-Design", "Adobe-After-Effects", "Adobe-Illustrator", "Adobe-Photoshop", "Adobe-Premier-Pro", "Vercel", "pandas", "NumPy"];
  const rows = 5;
  const durationFactors = [...Array(rows)].map(_ => randomNumber(0.85, 1.15));

  const data = { skills: shuffle(skills), rows, durationFactors };
  return await new Promise((resolve, _reject) => resolve(data));
});