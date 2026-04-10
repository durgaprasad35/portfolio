import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type ProjectCategory = "All" | "ML" | "SQL" | "Dashboard";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  github: string;
}

const projects: Project[] = [
  {
    title: "House Price Prediction",
    description:
      "Built a regression model to predict house prices using features like area, bedrooms, and location. Applied feature engineering and model tuning for optimal accuracy.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    category: "ML",
    github: "#",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Developed a classification system to detect fraudulent transactions using imbalanced dataset handling techniques like SMOTE and ensemble methods.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    category: "ML",
    github: "#",
  },
  {
    title: "Olist E-commerce Analysis",
    description:
      "Performed in-depth analysis of the Olist dataset using SQL Server—explored customer behavior, delivery performance, and revenue trends.",
    tech: ["SQL Server", "Data Analysis", "Joins", "CTEs"],
    category: "SQL",
    github: "#",
  },
  {
    title: "Sales Data Dashboard",
    description:
      "Created an interactive dashboard visualizing sales KPIs, regional performance, and product trends with dynamic filters and drill-downs.",
    tech: ["Power BI", "Tableau", "Excel", "DAX"],
    category: "Dashboard",
    github: "#",
  },
];

const filters: ProjectCategory[] = ["All", "ML", "SQL", "Dashboard"];

const ProjectsSection = () => {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">
          A selection of projects showcasing my skills in data analysis, ML, and visualization.
        </p>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f
                  ? "text-primary-foreground glow-primary"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
              style={active === f ? { backgroundImage: "var(--gradient-primary)" } : undefined}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`GitHub link for ${project.title}`}
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
