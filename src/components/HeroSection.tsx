import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
          Data Analyst & ML Engineer
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Durgaprasad{" "}
          <span className="gradient-text">Naradala</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Transforming raw data into actionable insights through machine learning and visual storytelling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-medium text-primary-foreground transition-all duration-300 hover:scale-105 animate-pulse-glow"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-medium border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
