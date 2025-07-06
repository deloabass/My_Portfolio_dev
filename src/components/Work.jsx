/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */

import { useState, useEffect, useRef } from "react"
import ProjectCard from "./ProjectCard"
import gsap from "gsap"

const works = [
  {
    imgSrc: "/images/project-1.jpeg",
    title: "App Ihambaobab",
    description: "Application mobile innovante pour la gestion communautaire",
    tags: ["React Native", "Node.js", "MongoDB"],
    projectLink: "",
    category: "mobile",
    featured: true
  },
  // {
  //   imgSrc: "/images/connectSahel-left.png",
  //   title: "SahelConnect",
  //   description: "Plateforme de connexion sociale pour l'Afrique de l'Ouest",
  //   tags: ["React Native", "Tailwind CSS", "JavaScript"],
  //   projectLink: "http://",
  //   category: "mobile",
  //   featured: true
  // },
  {
    imgSrc: "/images/boukata-ta.jpeg",
    title: "Boukata Ta",
    description: "Application de gestion de commandes pour les restaurants",
    tags: ["React Native", "Node.js", "MongoDB"],
    projectLink: "https://",
    category: "mobile",
    featured: true
  },
  {
    imgSrc: "/images/Ihambaobab.png",
    title: "Web Ihambaobab",
    description: "Site web moderne avec API intégrée",
    tags: ["React JS", "API", "Tailwind CSS"],
    projectLink: "",
    category: "web",
    featured: false
  },
  {
    imgSrc: "/images/InscriptionCodeloccol.png",
    title: "Admission CodeLoccol",
    description: "Système d'admission en ligne avec interface moderne",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    projectLink: "https://apply.codeloccol.org/",
    category: "web",
    featured: true
  },
  {
    imgSrc: "/images/project-5.png",
    title: "AirTravel Website",
    description: "Site de réservation de voyages avec API intégrée",
    tags: ["HTML", "CSS"],
    projectLink: "https://deloabass.github.io/Sit_de_voyage/",
    category: "web",
    featured: false
  },
  {
    imgSrc: "/images/GazInaLivreur.png",
    title: "GAZ-INA Livreur",
    description: "App de livraison pour les livreurs de gaz",
    tags: ["React Native", "JavaScript", "Node.js", "MongoDB", "API REST"],
    projectLink: "",
    category: "mobile",
    featured: true
  },
  {
    imgSrc: "/images/GazInaClient.png",
    title: "GAZ-INA Client",
    description: "Application client pour commande de gaz",
    tags: ["React Native", "JavaScript", "Node.js", "MongoDB", "API REST"],
    projectLink: "",
    category: "mobile",
    featured: false
  },
  {
    imgSrc: "/images/project-8.png",
    title: "GAZ-INA Admin",
    description: "Dashboard administrateur pour la gestion",
    tags: ["React JS", "Tailwind CSS", "JavaScript", "Node.js", "MongoDB", "API REST"],
    projectLink: "",
    category: "web",
    featured: false
  },
  {
    imgSrc: "/images/SiteWebYiel.png",
    title: "Site Web YielGroup",
    description: "Site web d'entreprise avec design moderne",
    tags: ["React JS", "Tailwind CSS", "JavaScript",],
    projectLink: "https://yielgroup.com/",
    category: "web",
    featured: true
  }
];

const categories = [
  { id: "all", label: "Tous les projets", icon: "🎯" },
  { id: "web", label: "Applications Web", icon: "🌐" },
  { id: "mobile", label: "Applications Mobile", icon: "📱" },
  { id: "featured", label: "Projets Phares", icon: "⭐" }
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredWorks, setFilteredWorks] = useState(works)
  const gridRef = useRef()

  useEffect(() => {
    let filtered = works;
    
    if (activeCategory === "featured") {
      filtered = works.filter(work => work.featured)
    } else if (activeCategory !== "all") {
      filtered = works.filter(work => work.category === activeCategory)
    }
    
    setFilteredWorks(filtered)
    
    // Animation lors du changement de catégorie
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      )
    }
  }, [activeCategory])

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline-2 mb-6 reveal-up">
            Mes Réalisations
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto reveal-up">
            Découvrez une sélection de mes projets les plus récents, 
            alliant innovation technique et design moderne.
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-up">
          {categories.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === id
                  ? "bg-sky-400 text-zinc-900 shadow-lg shadow-sky-400/25"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200"
              }`}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div 
          ref={gridRef}
          className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredWorks.map((work, index) => (
            <ProjectCard
              key={`${work.title}-${index}`}
              {...work}
              className="reveal-up"
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 reveal-up">
          <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/30 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-zinc-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vous avez un projet en tête ?
            </h3>
            <p className="text-zinc-400 mb-6 max-w-md mx-auto">
              Discutons de votre vision et créons ensemble quelque chose d&apos;exceptionnel.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-emerald-400 text-zinc-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              <span>Démarrer un projet</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;