/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */

/**
 * Components
 */
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpeg",
    title: "App Ihambaobab ",
    tags: ["React Native", "Developpement"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "My Portofolio",
    tags: ["API", "React JS"],
    projectLink: "http://localhost:5173/#contact",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Web Ihambaobab",
    tags: ["Development", "API", "React JS"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-4.png",
    title: "Admission à CodeLoccol",
    tags: ["Next JS", "Node JS"],
    projectLink: "https://deloabass.github.io/portofolio_image-Rotate/",
  },
  {
    imgSrc: "/images/project-5.png",
    title: "AirTravel website",
    tags: ["React JS", "API" ],
    projectLink: "https://deloabass.github.io/Sit_de_voyage/",
  },
  {
    imgSrc: "/images/project-6.png",
    title: "App GAZ-INA",
    tags: ["React Native", "Development"],
    projectLink: "",
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              className="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
works.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};
export default Work;
