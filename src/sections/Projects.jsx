import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Matière d'Ames",
    description: "Site de E-commerce sur la création de bijoux artisanaux.",
    image: "/projects/matieredames.png",
    tags: ["WordPress"],
    link: "https://matieres-d-ames.com/",
  },
  {
    title: "Application type Saas",
    description:
      "Une application type Saas qui permet de gérer des projets de création de contenu.",
    image: "/projects/saas.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://foxart-1d061.web.app/",
  },
  {
    title: "Application E-Commerce",
    description:
      "Une application e-commerce qui permet de gérer des produits et des commandes.",
    image: "/projects/e-comm2.png",
    tags: ["React", "PostgreSQL", "Tailwind CSS"],
    link: "https://next-shop-znxl.vercel.app/",
  },
  {
    title: "Landing Page de Voyages",
    description:
      "Une landing page de voyages qui permet de trouver des voyages à destination du monde entier.",

    image: "/projects/travel.png",
    tags: ["Html", "CSS", "JavaScript"],
    link: "https://travel-app-ac17f.web.app/",
  },

  {
    title: "Agence de Voyages",
    description: "Une agence de luxe qui permet de gérer des voyages.",

    image: "/projects/travek.png",
    tags: ["Html", "CSS", "JavaScript"],
    link: "https://enjoy-trip-mu.vercel.app/",
  },

  {
    title: "Landing Page Restaurant",
    description:
      "Une landing page de restaurant qui permet de trouver de consulter et reserver une table.",

    image: "/projects/restaurant.png",
    tags: ["Html", "CSS", "JavaScript", "PostgreSQL"],
    link: "https://atelier-7-frontend.vercel.app/",
  },

  {
    title: "Application produits Alimentaire",
    description:
      "Une application produits alimentaire qui permet de gérer des produits et des commandes.",

    image: "/projects/food.png",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    link: "",
  },
  {
    title: "Landing page Coffee Shop",
    description:
      "Une landing page de café qui permet de consulter et acheter des cafés.",

    image: "/projects/cofee.png",
    tags: ["Html", "CSS", "JavaScript"],
    link: "https://chloebaisse1.github.io/landing-coffee/#",
  },
]
export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Projets Sélectionnés
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 anmate-fade-in animation-delay-100 text-primary">
            Des projets qui{" "}
            <span className="text-black">font la différence.</span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Voici une selection de mes récents projets, en passant par des
            applications web complexes à des landing pages de voyages ou de
            E-Commerce.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image*/}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Liks */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transtion-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary transition-all "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project content */}
              <div className=" p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500 ">
          <AnimatedBorderButton>
            Voir tous les Projets
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}
