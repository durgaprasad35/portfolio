import { Target, TrendingUp, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Target, title: "Goal-Oriented", desc: "Focused on delivering data-driven solutions" },
  { icon: TrendingUp, title: "Growth Mindset", desc: "Continuously learning new tools and techniques" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Turning complex data into clear insights" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          I'm a passionate student aspiring to become a Data Analyst and Machine Learning Engineer.
          I love exploring datasets, building predictive models, and creating impactful visualizations
          that help businesses make smarter decisions.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center bg-primary/10 text-primary group-hover:glow-primary transition-all">
                <item.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
