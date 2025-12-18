const stats = [
  { value: "1000+", label: "Problems Solved" },
  { value: "3★", label: "CodeChef Rating" },
  { value: "1675", label: "LeetCode Max Rating" },
  { value: "3x", label: "ICPC Participation" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
