/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */

import { useState, useEffect } from "react";

const socialPlatforms = [
  {
    name: "GitHub",
    username: "deloabass",
    url: "https://github.com/deloabass?tab=repositories",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z"/>
      </svg>
    ),
    followers: "50+",
    metric: "Repositories",
    color: "from-gray-400 to-gray-600",
    bgColor: "bg-gray-500/10"
  },
  {
    name: "LinkedIn",
    username: "soumana-abassa",
    url: "https://www.linkedin.com/in/soumana-abassa-01a2a9265/",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"/>
      </svg>
    ),
    followers: "500+",
    metric: "Connexions",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10"
  },
  {
    name: "Facebook",
    username: "abassa.soumana",
    url: "https://www.facebook.com/profile.php?id=100070058963805",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    followers: "200+",
    metric: "Amis",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-600/10"
  }
];

const SocialStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('social-stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="social-stats" className="section bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline-2 mb-6 reveal-up">
            Connectons-nous
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto reveal-up">
            Suivez mon parcours et mes projets sur les réseaux sociaux. 
            Restons en contact pour échanger sur nos passions communes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialPlatforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:scale-105 ${platform.bgColor} ring-1 ring-zinc-700/30 hover:ring-opacity-50 reveal-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient de fond animé */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Header avec icône et nom */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-white shadow-lg`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{platform.name}</h3>
                    <p className="text-zinc-400 text-sm">@{platform.username}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 text-sm">{platform.metric}</span>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                      {platform.followers}
                    </span>
                  </div>
                  
                  {/* Barre de progression animée */}
                  <div className="w-full bg-zinc-700/30 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${platform.color} rounded-full transition-all duration-1000 ease-out ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{ transitionDelay: `${index * 0.2}s` }}
                    ></div>
                  </div>
                </div>

                {/* Call to action */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-zinc-500 text-sm group-hover:text-zinc-400 transition-colors">
                    Suivre
                  </span>
                  <div className="w-6 h-6 rounded-full bg-zinc-700/50 flex items-center justify-center group-hover:bg-zinc-600/50 transition-colors">
                    <svg className="w-3 h-3 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Section d'engagement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/30 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-zinc-700/50 max-w-2xl mx-auto reveal-up">
            <h3 className="text-2xl font-bold text-white mb-4">
              Rejoignez ma communauté
            </h3>
            <p className="text-zinc-400 mb-6">
              Restez informé de mes derniers projets, articles techniques et conseils de développement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialPlatforms.map((platform) => (
                <a
                  key={`footer-${platform.name}`}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialStats;