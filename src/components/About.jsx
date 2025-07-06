/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */

import { useEffect, useRef } from "react"
import gsap from "gsap"

const aboutItems = [
  {
    label: "Projets réalisés",
    number: 8,
    icon: "🚀",
    color: "from-sky-400 to-blue-500"
  },
  {
    label: "Années d'expérience",
    number: 2,
    icon: "⭐",
    color: "from-emerald-400 to-green-500"
  },
  {
    label: "Technologies maîtrisées",
    number: 12,
    icon: "💻",
    color: "from-purple-400 to-pink-500"
  },
  {
    label: "Clients satisfaits",
    number: 15,
    icon: "❤️",
    color: "from-orange-400 to-red-500"
  }
];

const About = () => {
  const statsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animation des compteurs
          aboutItems.forEach((item, index) => {
            gsap.to(statsRef.current[index], {
              innerText: item.number,
              duration: 2,
              ease: "power2.out",
              snap: { innerText: 1 },
              onUpdate: function() {
                statsRef.current[index].innerText = Math.ceil(this.targets()[0].innerText)
              }
            })
          })
        }
      })
    })

    if (statsRef.current[0]) {
      observer.observe(statsRef.current[0].parentElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 p-8 rounded-3xl md:p-12 reveal-up backdrop-blur-sm ring-1 ring-zinc-700/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-2 mb-6">
                À propos de moi
              </h2>
              <p className="text-zinc-300 mb-6 text-lg leading-relaxed">
                Passionné par le développement web et mobile, je crée des expériences numériques 
                exceptionnelles qui allient <span className="text-sky-400 font-semibold">performance</span>, 
                <span className="text-emerald-400 font-semibold"> esthétique</span> et 
                <span className="text-purple-400 font-semibold"> innovation</span>.
              </p>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Spécialisé dans les technologies modernes comme React, React Native, et Node.js, 
                je transforme vos idées en solutions digitales robustes et évolutives.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ma mission</h3>
                  <p className="text-zinc-400 text-sm">Créer des solutions qui font la différence</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {aboutItems.map(({ label, number, icon, color }, index) => (
                <div key={index} className="group">
                  <div className="bg-zinc-800/50 p-6 rounded-2xl hover:bg-zinc-700/50 transition-all duration-300 hover:scale-105 ring-1 ring-zinc-700/30 hover:ring-sky-400/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{icon}</span>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    </div>
                    <div className="flex items-center mb-2">
                      <span 
                        ref={el => statsRef.current[index] = el}
                        className="text-3xl font-bold text-white"
                      >
                        0
                      </span>
                      <span className="text-sky-400 font-semibold text-2xl ml-1">+</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-tight">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo.png"
                className="w-12 h-12 rounded-full ring-2 ring-sky-400/30"
                alt="Logo"
              />
              <div>
                <h4 className="text-white font-semibold">Abassa Soumana</h4>
                <p className="text-zinc-400 text-sm">Développeur Full-Stack</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-zinc-400 text-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Actuellement disponible pour de nouveaux projets
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;