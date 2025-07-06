/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    company: "TechStart Solutions",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "Abassa a transformé notre vision en une application mobile exceptionnelle. Son expertise technique et sa créativité ont dépassé nos attentes.",
    rating: 5,
    project: "Application Mobile E-commerce"
  },
  {
    id: 2,
    name: "Mohamed Traoré",
    role: "Directeur Marketing",
    company: "Sahel Digital",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "Un développeur passionné qui comprend vraiment les besoins du marché africain. Le site web qu'il a créé pour nous génère 3x plus de conversions.",
    rating: 5,
    project: "Site Web Corporate"
  },
  {
    id: 3,
    name: "Aminata Diallo",
    role: "Fondatrice",
    company: "EduTech Mali",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "Professionnel, réactif et innovant. Abassa a su créer une plateforme éducative qui répond parfaitement aux besoins de nos étudiants.",
    rating: 5,
    project: "Plateforme E-learning"
  },
  {
    id: 4,
    name: "Jean-Baptiste Kone",
    role: "CTO",
    company: "FinTech Bamako",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "Son approche méthodique et sa maîtrise des technologies modernes ont fait de notre collaboration un véritable succès. Je le recommande vivement.",
    rating: 5,
    project: "Application FinTech"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-zinc-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="section bg-gradient-to-b from-zinc-800 to-zinc-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline-2 mb-6 reveal-up">
            Ce que disent mes clients
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto reveal-up">
            La satisfaction de mes clients est ma priorité. Découvrez leurs témoignages 
            sur notre collaboration et les résultats obtenus.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial principal */}
          <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 p-8 md:p-12 rounded-3xl backdrop-blur-sm ring-1 ring-zinc-700/50 reveal-up">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Photo et infos client */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-sky-400/20 mx-auto md:mx-0"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-white font-bold text-lg mt-4">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sky-400 font-medium">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-zinc-400 text-sm">
                  {testimonials[currentIndex].company}
                </p>
                <div className="flex justify-center md:justify-start gap-1 mt-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Contenu du témoignage */}
              <div className="flex-1">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-sky-400/30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>
                </div>
                <blockquote className="text-zinc-200 text-lg leading-relaxed mb-6">
                  &quot;{testimonials[currentIndex].content}&quot;
                </blockquote>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span>Projet: {testimonials[currentIndex].project}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 ring-1 ring-zinc-700/30 hover:ring-sky-400/30"
              aria-label="Témoignage précédent"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicateurs */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-sky-400 scale-125'
                      : 'bg-zinc-600 hover:bg-zinc-500'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 ring-1 ring-zinc-700/30 hover:ring-sky-400/30"
              aria-label="Témoignage suivant"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Stats de satisfaction */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: "100%", label: "Clients satisfaits" },
              { number: "15+", label: "Projets livrés" },
              { number: "24h", label: "Temps de réponse" },
              { number: "2+", label: "Années d'expérience" }
            ].map((stat, index) => (
              <div key={index} className="text-center reveal-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-zinc-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;