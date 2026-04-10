import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type ProjectCategory = "All" | "ML" | "SQL" | "Dashboard";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  demoUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "House Price Prediction",
    description:
      "Built a regression model to predict house prices using features like area, bedrooms, and location. Applied feature engineering and model tuning for optimal accuracy.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    category: "ML",
  },
  {
    title: "Transaction Risk AI",
    description:
      "Interactive Streamlit app for transaction risk analysis—explore patterns, model outputs, and data-driven signals for safer decisions.",
    tech: ["Python", "Streamlit", "Machine Learning", "Pandas"],
    category: "ML",
    demoUrl: "https://transaction-risk-ai.streamlit.app/",
  },
  {
    title: "Student Dropout Prediction App",
    description:
      "Streamlit app that estimates dropout risk from academic and demographic signals—upload or explore sample data and review model-backed insights to support early intervention.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    category: "ML",
    demoUrl: "https://protfolioprojects-dithfkytpvory2tz4cp2qw.streamlit.app/",
  },
  {
    title: "SQL Projects — E-commerce & analytics",
    description:
      "SQL analysis on the Olist e-commerce dataset—customer behavior, delivery performance, and revenue—plus exploratory queries, window functions, and segmentation. Full scripts live in the repo.",
    tech: ["SQL Server", "Joins", "CTEs", "Window functions"],
    category: "SQL",
    repoUrl: "https://github.com/durgaprasad35/Sql-projects",
  },
  {
    title: "BlinkIT grocery analysis",
    description:
      "End-to-end SQL analytics on BlinkIT grocery sales data—cleaning and standardizing fields, then KPIs for total and average sales, item counts, and ratings. Deeper cuts by item fat content, product type, outlet age, location tier, and outlet size to explain performance and support store optimization.",
    tech: ["SQL", "Data cleaning", "Aggregations", "KPIs"],
    category: "SQL",
    repoUrl: "https://github.com/durgaprasad35/Blinkit_analysis_Sql",
  },
  {
    title: "Sales Data Dashboard",
    description:
      "Created an interactive dashboard visualizing sales KPIs, regional performance, and product trends with dynamic filters and drill-downs.",
    tech: ["Power BI", "Tableau", "Excel", "DAX"],
    category: "Dashboard",
  },
];

const filters: ProjectCategory[] = ["All", "ML", "SQL", "Dashboard"];

const ProjectsSection = () => {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="section-kicker">Portfolio</p>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle mb-12">
          A selection of work spanning data analysis, machine learning, and visualization.
        </p>

        <div className="flex justify-center gap-2.5 mb-14 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === f
                  ? "text-primary-foreground border-transparent glow-primary"
                  : "glass-card text-muted-foreground hover:text-foreground border-transparent hover:border-primary/20"
              }`}
              style={active === f ? { backgroundImage: "var(--gradient-primary)" } : undefined}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
          {filtered.map((project, i) => (
            <article
              key={project.title}
              className="glass-card-interactive glass-card rounded-2xl p-7 md:p-8 flex flex-col text-left group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent mb-5 opacity-90 group-hover:w-16 transition-all duration-300" />
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <span className="inline-block text-[0.6rem] font-semibold uppercase tracking-wider text-primary/90 mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[0.7rem] px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(project.demoUrl || project.repoUrl) && (
                <div className="flex flex-wrap gap-3 pt-2 border-t border-border/60">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/85 transition-colors"
                    >
                      <ExternalLink size={16} className="opacity-80" />
                      Live demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} className="opacity-80" />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
