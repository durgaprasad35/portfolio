import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-[0.28]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,hsl(187_85%_53%/_0.12),transparent)]" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl pt-16">
        <div className="inline-flex items-center gap-3 mb-6 animate-fade-up">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" aria-hidden />
          <p className="text-primary font-semibold tracking-[0.25em] uppercase text-xs md:text-sm">
            Data Analyst & ML Engineer
          </p>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent" aria-hidden />
        </div>
        <h1
          className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-up tracking-tight"
          style={{ animationDelay: "0.1s" }}
        >
          Durgaprasad <span className="gradient-text">Naradala</span>
        </h1>
        <p
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Transforming raw data into actionable insights through machine learning and visual storytelling.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a href="#projects" className="btn-primary animate-pulse-glow rounded-full px-10">
            View My Work
          </a>
          <a href="#contact" className="btn-outline rounded-full px-10">
            Get In Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
        aria-label="Scroll to about"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
