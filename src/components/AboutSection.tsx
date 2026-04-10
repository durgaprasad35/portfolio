import { Target, TrendingUp, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Target, title: "Goal-Oriented", desc: "Focused on delivering data-driven solutions" },
  { icon: TrendingUp, title: "Growth Mindset", desc: "Continuously learning new tools and techniques" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Turning complex data into clear insights" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="section-kicker">Introduction</p>
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle mb-16 max-w-2xl">
          I'm a passionate student aspiring to become a Data Analyst and Machine Learning Engineer. I love
          exploring datasets, building predictive models, and creating impactful visualizations that help
          businesses make smarter decisions.
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="glass-card-interactive glass-card rounded-2xl p-8 text-center group"
            >
              <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center">
                <span
                  className="absolute inset-0 rounded-2xl opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, hsl(187 85% 53% / 0.35), hsl(265 80% 60% / 0.25))",
                  }}
                />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <item.icon size={26} strokeWidth={1.75} />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
