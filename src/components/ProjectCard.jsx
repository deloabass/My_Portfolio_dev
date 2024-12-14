/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

/**
 * Node modules
 */

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  if (!Array.isArray(tags)) {
    return null;
  }
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5
                 grid items-center px-3 rounded-lg"
                key={key}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div
          className="w-11 h-11 rounded-lg grid place-items-center
         bg-sky-400 text-zinc-950 shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="text-zinc-900"
          >
            <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
          </svg>
        </div>
      </div>
      <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  );
};
ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};
export default ProjectCard;
