/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 8,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Bienvenue ! Je suis Abassa, un développeur web professionnel avec un
            talent pour créer des sites web visuellement époustouflants et
            hautement fonctionnels. Combinant créativité et expertise technique,
            je transforme votre vision en un chef-d&apos;œuvre numérique qui excelle
            à la fois en apparence et en performances.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.png"
              className="ml-auto md:w-[40px] md:h-[40px]"
              width={30}
              height={30}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
