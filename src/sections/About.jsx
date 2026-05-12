import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Code Propre",
    description:
      "Écrire un code maintenable et évolutif qui résiste à l'épreuve du temps.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimiser la vitesse pour offrir des expériences utilisateur ultrarapides.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Travailler en étroite collaboration avec les équipes pour donner vie aux idées.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Rester à la pointe des dernières technologies et des meilleures pratiques.",
  },
]
export const About = () => {
  return (
    <section id="about" className="py-3 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid  lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                A propos de moi
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Constuire l'avenir,
              <span className="font-serif italic font-normal text-primary">
                {" "}
                Un composant à la fois.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Je suis une conceptrice développeuse d'applications passionnée,
                spécialisée dans la création d'interfaces soignées et
                d'expériences utilisateur intuitives. Mon parcours est né d'une
                curiosité pour le design et le code, deux disciplines que j'aime
                réunir dans chaque projet.
              </p>
              <p>
                Je maîtrise React, ainsi que les technologies web modernes, pour
                concevoir aussi bien des interfaces élégantes que des
                applications robustes. Mon approche allie rigueur technique et
                sensibilité au design, du cahier des charges jusqu'au
                déploiement.
              </p>
              <p>
                En dehors du code, j'aime explorer de nouvelles tendances UI,
                m'inspirer du design graphique et continuer à apprendre pour
                toujours livrer des produits à la hauteur des attentes.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mon objectif est de concevoir des applications qui ne soient
                pas seulement fonctionnelles, mais véritablement agréables à
                utiliser — des produits pensés pour les utilisateurs, construits
                avec soin."
              </p>
            </div>
          </div>

          {/* Right column highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
