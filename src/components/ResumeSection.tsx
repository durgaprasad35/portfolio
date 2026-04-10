import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-28 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="section-kicker">CV</p>
        <h2 className="section-title">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="section-subtitle mb-12">
          Download my resume to learn more about my education, experience, and certifications.
        </p>

        <div className="relative mx-auto max-w-md">
          <div
            className="absolute -inset-px rounded-3xl opacity-70 blur-sm"
            style={{
              background: "linear-gradient(135deg, hsl(187 85% 53% / 0.5), hsl(265 80% 60% / 0.35))",
            }}
          />
          <div className="relative glass-card-strong rounded-3xl px-10 py-12 flex flex-col items-center gap-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-inner">
              <FileText size={36} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">Durgaprasad Naradala</h3>
              <p className="text-sm text-muted-foreground">Data Analyst & ML Engineer</p>
            </div>
            <a
              href="#"
              className="btn-primary rounded-xl px-10 w-full max-w-xs justify-center"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
