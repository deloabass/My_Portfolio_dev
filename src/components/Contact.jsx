/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */

import { useState, useRef } from "react";
import gsap from "gsap";

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    description: "delomodibo@gmail.com",
    action: "Envoyer un email",
    href: "mailto:delomodibo@gmail.com",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Téléphone",
    description: "+227 85 82 24 80",
    action: "Appeler maintenant",
    href: "tel:+227 85 82 24 80",
    color: "from-green-400 to-green-600"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Localisation",
    description: "Niamey, Niger",
    action: "Voir sur la carte",
    href: "#",
    color: "from-purple-400 to-purple-600"
  }
];

const socialLinks = [
  {
    href: "https://github.com/deloabass?tab=repositories",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z"/>
      </svg>
    ),
    alt: "GitHub",
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/abassa-soumana/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"/>
      </svg>
    ),
    alt: "LinkedIn",
    label: "LinkedIn"
  },
  {
    href: "https://www.facebook.com/profile.php?id=100070058963805",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    alt: "Facebook",
    label: "Facebook"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://getform.io/f/alllxjna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Animation de succès
        gsap.to(formRef.current, {
          scale: 0.95,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut"
        });
      } else {
        setSubmitStatus('error');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="section bg-gradient-to-b py-12 from-zinc-900 to-zinc-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline-2 mb-6 reveal-up">
            Travaillons Ensemble
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto reveal-up">
            Vous avez un projet en tête ? Une idée à concrétiser ? 
            Contactez-moi et donnons vie à votre vision ensemble.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="reveal-up">
              <h3 className="text-2xl font-bold text-white mb-6">
                Restons en contact
              </h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations. 
                N&apos;hésitez pas à me contacter pour discuter de votre projet.
              </p>
            </div>

            {/* Méthodes de contact */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/30 transition-all duration-300 reveal-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{method.title}</h4>
                    <p className="text-zinc-400 text-sm">{method.description}</p>
                  </div>
                  <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="reveal-up">
              <h4 className="text-white font-semibold mb-4">Suivez-moi</h4>
              <div className="flex gap-3">
                {socialLinks.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 ring-1 ring-zinc-700/30 hover:ring-sky-400/30"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="reveal-up">
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 p-8 rounded-2xl backdrop-blur-sm ring-1 ring-zinc-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Envoyez-moi un message
              </h3>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400">
                  ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                  ❌ Erreur lors de l&apos;envoi. Veuillez réessayer.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="label">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre nom"
                    className="text-field"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="votre@email.com"
                    className="text-field"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="label">
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Sujet de votre message"
                  className="text-field"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="label">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows={6}
                  className="text-field resize-y min-h-32 max-h-80"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-400 to-emerald-400 text-zinc-900 py-4 px-6 rounded-xl font-semibold hover:from-sky-300 hover:to-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <span>Envoyer le message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-zinc-500 text-sm mt-4 text-center">
                Je m&apos;engage à répondre dans les 24h ouvrées.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;