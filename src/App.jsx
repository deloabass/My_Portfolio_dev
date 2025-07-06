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
import Skill from "./components/Skill"
import Work from "./components/Work"
import SocialStats from "./components/SocialStats"
// import Testimonials from "./components/Testimonials"

/**
 * Node modules 
 */
import { ReactLenis } from 'lenis/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';

/**
 * Register
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })

  // Cursor personnalisé
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.innerHTML = '<div class="cursor-dot"></div>';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = () => cursor.classList.add('cursor-hover');
    const handleMouseLeave = () => cursor.classList.remove('cursor-hover');

    document.addEventListener('mousemove', moveCursor);
    
    // Ajouter l'effet hover sur les éléments interactifs
    const interactiveElements = document.querySelectorAll('a, button, .btn, .menu-btn');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);
  
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <SocialStats />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer/>
    </ReactLenis>
  )
}

export default App