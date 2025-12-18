import { Trophy, Medal, Award } from "lucide-react";

const achievements = [
  { 
    icon: Trophy,
    title: "1st Runner Up - IIUC Intra University Contest",
    description: "Spring 2024 with Team IIUC_pushback",
    year: "2024"
  },
  { 
    icon: Medal,
    title: "ICPC Asia Dhaka Regional",
    description: "Top 22% in 2022, Top 33% in 2023, Top 41% in 2024",
    year: "2022-24"
  },
  { 
    icon: Award,
    title: "CodeChef 3★ Coder",
    description: "Max rating 1624 with 100+ problems solved",
    year: "Active"
  },
  { 
    icon: Trophy,
    title: "LeetCode Top Performer",
    description: "Max rating 1675 with 200+ problems solved",
    year: "Active"
  },
];

const ClientsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Achievements</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all text-center"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-8 h-8" />
              </div>
              <span className="text-xs text-primary font-medium">{item.year}</span>
              <h3 className="font-heading font-semibold mt-2 mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
