import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "Chloé est une développeuse rigoureuse et créative. Elle a su livrer des interfaces soignées tout en respectant les délais. Un vrai atout pour n'importe quelle équipe.",
    author: "Thomas Rivière",
    role: "Lead Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    quote:
      "Très impliquée dans son alternance, Chloé apprend vite et pose les bonnes questions. Sa curiosité et sa motivation en font une développeuse prometteuse.",
    author: "Marie Fontaine",
    role: "Formatrice, Expernet",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    quote:
      "Chloé a une vraie sensibilité pour le design et l'expérience utilisateur. Elle pense toujours à l'utilisateur final, ce qui fait toute la différence dans ses réalisations.",
    author: "Lucas Payet",
    role: "Chef de projet",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    quote:
      "J'ai eu la chance de travailler avec Chloé sur plusieurs projets. Son code est propre, bien structuré, et elle est toujours prête à s'améliorer. Je la recommande sans hésiter.",
    author: "Sophie Grondin",
    role: "Développeuse Full Stack",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
]

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length)
  }

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-&/2 left-&/2 w-[800px] h-[800px] bg-priary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Ce que les gens disent
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-shadow-black">
            Des mots qui touchent{" "}
            <span className="font-serif italic font-normal text-primary">
              de personnes qui comptent.
            </span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonials Main */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="aboslute -top-4 left-8 h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                />

                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300
                      ${
                        idx === activeIdx
                          ? "w-8 bg-primary"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
