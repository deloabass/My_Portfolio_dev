/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */
/**
 * Components
 */

import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/html.png",
    label: "HTML & CSS",
    desc: "Le Langage des Pages Web",
  },
  {
    imgSrc: "/images/JavaScript.png",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/react.png",
    label: "ReactJS",
    desc: "Application Web",
  },
  {
    imgSrc: "/images/next.webp",
    label: "NextJS",
    desc: "Application Web",
  },
  {
    imgSrc: "/images/reactnative.svg",
    label: "React Native",
    desc: "App mobile",
  },
  {
    imgSrc: "/images/Bootstrap.png",
    label: "Bootstrap",
    desc: "Design responsive",
  },
  {
    imgSrc: "/images/tailwind.jpg",
    label: "TailwindCSS",
    desc: "Design flexible",
  },
  {
    imgSrc: "/images/node.png",
    label: "NodeJS",
    desc: "JavaScript côté serveur", 
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} className="reveal-up"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
