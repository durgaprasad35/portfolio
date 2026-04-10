const skills = [
  { name: "Python", level: 90, category: "Languages" },
  { name: "Pandas & NumPy", level: 85, category: "Languages" },
  { name: "Scikit-learn", level: 80, category: "ML" },
  { name: "SQL Server", level: 85, category: "Languages" },
  { name: "Machine Learning", level: 78, category: "ML" },
  { name: "Data Visualization", level: 88, category: "Tools" },
  { name: "Power BI", level: 82, category: "Tools" },
  { name: "Tableau", level: 75, category: "Tools" },
  { name: "Excel", level: 90, category: "Tools" },
  { name: "HTML & CSS", level: 70, category: "Languages" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Tools and technologies I work with to turn data into decisions.
        </p>

        <div className="grid gap-5">
          {skills.map((skill, i) => (
            <div key={i} className="group">
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    backgroundImage: "var(--gradient-primary)",
                    animationDelay: `${i * 100}ms`,
                  }}
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
