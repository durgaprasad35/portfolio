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

const categories = ["Languages", "ML", "Tools"] as const;

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="container mx-auto max-w-4xl">
        <p className="section-kicker">Expertise</p>
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle mb-14">
          Tools and technologies I work with to turn data into decisions.
        </p>

        <div className="glass-card-strong rounded-3xl p-8 md:p-10 space-y-10">
          {categories.map((cat) => (
            <div key={cat}>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary/90 mb-4">
                {cat}
              </p>
              <div className="space-y-5">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, i) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs tabular-nums text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-secondary/80 overflow-hidden ring-1 ring-inset ring-white/[0.04]">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110"
                          style={{
                            width: `${skill.level}%`,
                            backgroundImage: "var(--gradient-primary)",
                            boxShadow: "0 0 20px hsl(187 85% 53% / 0.25)",
                            transitionDelay: `${i * 40}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
