const experiences = [
  {
    period: "Octobre 2025 - 2027",
    role: "Conceptrice Développeuse d'Applications (CDA) - Alternance",
    company: "Expernet / Leclerc Réunion",
    description:
      "Formation en alternance alliant théorie chez Expernet (centre de formation) et pratique chez Leclerc Réunion. Conception et développement d'applications web et mobile, participation à des projets concrets en entreprise.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "MySQL",
      "MongoDB",
      "Java",
      "Doker",
      "CI/CD",
      "Next.js",
      "Symfony",
      "PHP",
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "PostgreSQL",
      "SEO",
      "Vue.js",
    ],
    current: true,
  },
  {
    period: "2023 - 2025",
    role: "Formation Développeuse Web & Web Mobile - Bac +2",
    company: "STUDI",
    description:
      "Formation diplômante couvrant le développement web frontend et backend, la gestion de bases de données, l'intégration d'API, la sécurité des applications et les bonnes pratiques du développement moderne.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "MySQL",
      "MongoDB",
      "Java",
      "Doker",
      "CI/CD",
      "Next.js",
      "Symfony",
      "PHP",
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "PostgreSQL",
      "SEO",
    ],
    current: false,
  },
  {
    period: "2017 - 2022",
    role: "Assistante de Magasin",
    company: "ALDI",
    description:
      "Gestion d'équipes et coordination opérationnelle au quotidien. Cette expérience a forgé ma rigueur, mon sens de l'organisation et ma capacité à m'adapter rapidement — des qualités que je mets aujourd'hui au service du développement.",
    technologies: [
      "Gestion de projet",
      "Outils numériques",
      "Organisation",
      "Communication",
      "Relation client",
    ],
    current: false,
  },
]

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-&/4 w-96 h-96 bg-primary/5 rounded-ful blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Mon Parcours
          </span>
          <h2 className="text-4xl md:text-5l font-bold mt-4mb-6 animate-fade-in animation-delay-100 text-primary-foreground">
            Une expérience{" "}
            <span className="font-serif italic font-normal text-primary">
              {" "}
              qui parle d'elle-même.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Une ligne du temps de mon évolution professionnelle, de mes premiers
            pas curieux jusqu'à la conception et le développement d'applications
            à part entière.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0,0.8)]" />

          {/* Experiences Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary aimate-ping opacity-75" />
                  )}
                </div>

                {/* Timeline Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground ">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
