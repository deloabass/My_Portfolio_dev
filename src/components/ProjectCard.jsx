/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */

import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({ imgSrc, title, description, tags, projectLink, featured, classes }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!Array.isArray(tags)) {
    return null;
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 
        hover:from-zinc-700/50 hover:to-zinc-800/30 transition-all duration-500 ring-1 ring-zinc-700/30 
        hover:ring-sky-400/30 hover:scale-[1.02] backdrop-blur-sm ${classes}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge pour les projets phares */}
      {featured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-sky-400 to-emerald-400 text-zinc-900 px-3 py-1 rounded-full text-xs font-semibold">
          ⭐ Projet Phare
        </div>
      )}

      {/* Image du projet */}
      <div className="relative overflow-hidden">
        <figure className="aspect-[4/3] overflow-hidden">
          <img 
            src={imgSrc} 
            alt={title} 
            loading="lazy" 
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent"></div>
        </figure>
        
        {/* Overlay avec bouton */}
        <div className={`absolute inset-0 bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center 
          transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full 
              flex items-center justify-center text-zinc-900 font-bold text-xl hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <p className="text-white font-semibold">Voir le projet</p>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-zinc-700/50 text-zinc-300 rounded-full 
                hover:bg-sky-400/20 hover:text-sky-400 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer avec lien */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>Projet terminé</span>
          </div>
          
          {projectLink && (
            <div className="w-8 h-8 rounded-lg bg-sky-400/10 flex items-center justify-center 
              group-hover:bg-sky-400 group-hover:text-zinc-900 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Lien invisible pour toute la carte */}
      {projectLink && (
        <a 
          href={projectLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Voir le projet ${title}`}
        ></a>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  featured: PropTypes.bool,
  classes: PropTypes.string,
};

export default ProjectCard;