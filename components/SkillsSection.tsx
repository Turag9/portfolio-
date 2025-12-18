const skills = [
  { name: "C/C++", level: 95 },
  { name: "Competitive Programming", level: 90 },
  { name: "Data Structures & Algorithms", level: 90 },
  { name: "Flutter/Dart", level: 85 },
  { name: "Git/GitHub", level: 85 },
  { name: "React", level: 80 },
  { name: "HTML/CSS", level: 80 },
  { name: "Java", level: 75 },
  { name: "MySQL/SQLite", level: 70 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Skills</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto grid gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
