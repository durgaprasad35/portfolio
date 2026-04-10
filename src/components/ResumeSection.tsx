import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Download my resume to learn more about my education, experience, and certifications.
        </p>

        <div className="glass-card rounded-xl p-10 inline-flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 text-primary">
            <FileText size={32} />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              Durgaprasad Naradala
            </h3>
            <p className="text-sm text-muted-foreground">
              Data Analyst & ML Engineer Resume
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
