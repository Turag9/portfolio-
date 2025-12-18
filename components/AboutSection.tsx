import { Code2, Trophy, Rocket } from "lucide-react";
import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">About Me</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Passionate About
                <br />
                <span className="text-gradient">Problem Solving</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm Syed Mohammed Musabbir Turag, a Computer Science & Engineering student at 
              International Islamic University Chittagong (IIUC). I'm deeply passionate about 
              Competitive Programming and have solved 1000+ problems across various platforms 
              including CodeForces, LeetCode, and CodeChef.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              As a Flutter Developer, I build cross-platform mobile applications with clean 
              architecture and responsive UI. I also serve as a Trainer at IIUC Competitive 
              Programming Society, conducting bootcamps and mentoring fellow programmers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="mailto:musabbirturag9@gmail.com">Contact Me</a>
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
                <a href="#portfolio">View Portfolio →</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Code2, title: "Competitive Programming", desc: "1000+ problems solved on various platforms" },
              { icon: Trophy, title: "ICPC Participant", desc: "Multiple ICPC regional contests participation" },
              { icon: Rocket, title: "Flutter Developer", desc: "Building cross-platform mobile applications" },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-accent"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
