/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */
/**
 * Components
 */
import { ButtonOutline, ButtonPrimary } from "./Button"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const Hero = () => {
  const heroRef = useRef()
  const imageRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.from(textRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    })
    .from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.5")

    // Animation de particules flottantes
    gsap.to(".floating-particle", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3
    })
  }, [])

  return (
    <section className="pt-28 lg:pt-36 relative overflow-hidden" id="home" ref={heroRef}>
      {/* Particules flottantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-particle absolute top-20 left-10 w-2 h-2 bg-sky-400/30 rounded-full"></div>
        <div className="floating-particle absolute top-40 right-20 w-3 h-3 bg-emerald-400/20 rounded-full"></div>
        <div className="floating-particle absolute bottom-40 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full"></div>
        <div className="floating-particle absolute top-60 right-1/3 w-2 h-2 bg-pink-400/25 rounded-full"></div>
      </div>

      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div ref={textRef}>
          <div className="flex items-center gap-3 reveal-up">
            <figure className="img-box w-9 h-9 rounded-lg relative overflow-hidden">
              <img src="/images/logo.png"
                width={40}
                height={40}
                className="img-cover"
                alt="Abassa Soumana"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 to-transparent"></div>
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Disponible pour de nouveaux projets
            </div>
          </div>
          
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 reveal-up">
            Créateur d'Expériences
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
              Numériques Innovantes
            </span>
          </h2>
          
          <p className="text-zinc-400 text-lg mb-8 max-w-[45ch] leading-relaxed reveal-up">
            Développeur passionné spécialisé dans la création d'applications web et mobile modernes. 
            Je transforme vos idées en solutions digitales performantes et esthétiques.
          </p>
          
          <div className="flex items-center gap-3 reveal-up">
            <ButtonPrimary 
              href="/cv-abassa-soumana.pdf" 
              label="Télécharger CV" 
              icon={true}
              classes="group hover:scale-105 transition-transform"
            />
            <ButtonOutline 
              href="#about" 
              label="Découvrir mon parcours" 
              icon={true}
              classes="hover:border-sky-400/50 transition-colors"
            />
          </div>

          {/* Stats rapides */}
          <div className="flex items-center gap-8 mt-12 reveal-up">
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-400">8+</div>
              <div className="text-sm text-zinc-500">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">2+</div>
              <div className="text-sm text-zinc-500">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-sm text-zinc-500">Satisfaction client</div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block" ref={imageRef}>
          <div className="relative">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t 
              from-sky-400/20 via-25% via-sky-400/10 to-65% to-transparent rounded-2xl overflow-hidden
              ring-1 ring-sky-400/20 shadow-2xl shadow-sky-400/10">
              <img src="/images/myPicture.JPG"
                width={656} 
                height={800}
                className="w-full h-full object-cover"
                alt="Abassa Soumana - Développeur Web" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-transparent"></div>
            </figure>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-emerald-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-400/15 to-pink-400/15 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero