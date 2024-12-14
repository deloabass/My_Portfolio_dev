/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */
/**
 * Components
*/
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import Skill from "./components/Skill"
import Work from "./components/Work"



/**
 * Node modules 
 */
import { ReactLenis } from 'lenis/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
/**
 * Register
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);



const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')
    elements.forEach((elements) => {
      gsap.to(elements, {
        scrollTrigger: {
          trigger: elements,
          start: '_200 bottom',
          end: 'bottom 80%',
          scrub: true,

        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
    console.log(elements);
    
  })
  
  return (
    <ReactLenis root>
    <Header />
    <main>
      <Hero />
      <About />
      <Skill />
      <Work />
      <ProjectCard />
      <Contact />
    </main>
    <Footer/>
    </ReactLenis>
  )
}
export default App