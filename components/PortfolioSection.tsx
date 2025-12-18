import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "BMI Calculator App",
    description: "A cross-platform BMI calculator built with Flutter & Dart featuring responsive UI, custom animations, and state management. Compatible with Android and iOS.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    tags: ["Flutter", "Dart", "Mobile App", "Cross-platform"],
    liveUrl: "#",
    githubUrl: "https://github.com/Turag9",
  },
  {
    title: "FlowerShop E-Commerce App",
    description: "An e-commerce app with product listing and details, integrated with Fake Store API for dynamic data fetching. Features responsive and modern UI design.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
    tags: ["Flutter", "REST API", "E-commerce", "GetX"],
    liveUrl: "#",
    githubUrl: "https://github.com/Turag9",
  },
  {
    title: "Myntra Landing Page Clone",
    description: "A pixel-perfect responsive clone of Myntra's landing page with navigation bar, product grid, and footer matching the original design.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "https://github.com/Turag9",
  },
  {
    title: "Cricket Game",
    description: "An interactive Cricket Game built with HTML, CSS & JavaScript featuring scoring logic and localStorage persistence. Uses modular code structure.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
    tags: ["JavaScript", "HTML", "CSS", "Game Dev"],
    liveUrl: "#",
    githubUrl: "https://github.com/Turag9",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Portfolio</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
