import { Briefcase, GraduationCap } from "lucide-react";

const timelineData = [
  {
    year: "2024 - Present",
    title: "Trainer - Competitive Programming Society",
    company: "IIUC",
    description: "Conducting bootcamps, tracking participants' progress, mentoring problem-solving skills and critical thinking.",
    type: "work",
  },
  {
    year: "2024",
    title: "ICPC Asia Dhaka Regional",
    company: "Team: IIUC_pushback",
    description: "Participated in The 2024 ICPC Asia Dhaka Regional Site Online Preliminary Contest, achieved Top 41%.",
    type: "work",
  },
  {
    year: "2024",
    title: "1st Runner Up - Intra University Contest",
    company: "IIUC Intra University Programming Contest Sp'24",
    description: "Secured 1st Runner Up position with Team IIUC_pushback in the Spring 2024 programming contest.",
    type: "work",
  },
  {
    year: "2022 - 2026 (Expected)",
    title: "BSc in Computer Science & Engineering",
    company: "International Islamic University Chittagong",
    description: "Currently pursuing Bachelor's degree with CGPA: 3.083/4.00. Expected graduation in July 2026.",
    type: "education",
  },
];

const TimelineSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Experience</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute left-[11px] top-10 w-0.5 h-full bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                {item.type === "work" ? (
                  <Briefcase className="w-3 h-3 text-primary-foreground" />
                ) : (
                  <GraduationCap className="w-3 h-3 text-primary-foreground" />
                )}
              </div>

              {/* Content */}
              <div className="card-gradient p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors">
                <span className="text-sm text-primary font-medium">{item.year}</span>
                <h3 className="font-heading text-xl font-semibold mt-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.company}</p>
                <p className="text-muted-foreground mt-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
