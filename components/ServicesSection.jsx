import { Code, Trophy, Smartphone, Users, Zap, BookOpen } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Competitive Programming",
    description: "Problem solving expertise in algorithms, data structures, and optimization techniques.",
  },
  {
    icon: Smartphone,
    title: "Flutter Development",
    description: "Building cross-platform mobile applications for Android and iOS using Flutter & Dart.",
  },
  {
    icon: Trophy,
    title: "Contest Participation",
    description: "Active participant in ICPC, CodeForces, LeetCode, and other competitive programming contests.",
  },
  {
    icon: Users,
    title: "CP Training & Mentorship",
    description: "Conducting bootcamps and mentoring aspiring competitive programmers at IIUC.",
  },
  {
    icon: Zap,
    title: "Algorithm Design",
    description: "Designing efficient algorithms and optimizing code for better performance.",
  },
  {
    icon: BookOpen,
    title: "Web Development",
    description: "Creating responsive websites using HTML, CSS, Bootstrap, and Tailwind CSS.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Services</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-accent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
