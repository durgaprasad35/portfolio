import { useState } from "react";
import { Send, Linkedin, Github, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder — integrate with backend later
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Have a question or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium text-primary-foreground transition-all duration-300 hover:scale-105 self-start"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <Send size={16} />
              Send Message
            </button>
          </form>

          {/* Social links */}
          <div className="flex flex-col justify-center gap-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Connect with me
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <Linkedin size={18} />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <Github size={18} />
                </div>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="mailto:durgaprasad@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">durgaprasad@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
