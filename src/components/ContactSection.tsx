import { useState } from "react";
import { Send, Github, Mail } from "lucide-react";

/** LeetCode-style mark (brand SVG not in lucide); uses currentColor for theme */
function LeetCodeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M16.102 17.93l-2.697 2.697-2.697-2.697a.749.749 0 1 0-1.06 1.06l3.227 3.227a.751.751 0 0 0 1.06 0l3.227-3.227a.749.749 0 1 0-1.06-1.06zm-5.204-8.5L5.831 7.653v8.694l4.394 4.394v-6.623L7.44 12.5l2.697-2.697 1.06-1.06a.749.749 0 0 0 0-1.06l-.53-.53a.749.749 0 0 0-1.06 0zm8.204 0L13.06 7.653 10.364 5.43a.751.751 0 0 0-1.06 0l-.53.53a.749.749 0 0 0 0 1.06l1.06 1.06 2.697 2.697.53.53a.749.749 0 0 0 1.06 0l.53-.53a.749.749 0 0 0 0-1.06z" />
    </svg>
  );
}

const CONTACT_EMAIL = "naradaladurgaprasad@gmail.com";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="container mx-auto max-w-4xl">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle mb-14">
          Have a question or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          <form onSubmit={handleSubmit} className="glass-card-strong rounded-3xl p-8 flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input-glass"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-glass"
            />
            <textarea
              placeholder="Your message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="input-glass resize-none min-h-[140px]"
            />
            <button type="submit" className="btn-primary rounded-xl mt-1 self-start px-10">
              <Send size={16} />
              Send message
            </button>
          </form>

          <div className="glass-card rounded-3xl p-8 h-full flex flex-col justify-center gap-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Connect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prefer social or email? Use the links below.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://leetcode.com/u/durgaprasad35/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-transparent px-4 py-3.5 transition-all duration-200 hover:border-primary/25 hover:bg-primary/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                  <LeetCodeIcon size={18} />
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  LeetCode
                </span>
              </a>
              <a
                href="https://github.com/durgaprasad35"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-transparent px-4 py-3.5 transition-all duration-200 hover:border-primary/25 hover:bg-primary/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                  <Github size={18} />
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  GitHub
                </span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-transparent px-4 py-3.5 transition-all duration-200 hover:border-primary/25 hover:bg-primary/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                  <Mail size={18} />
                </span>
                <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors truncate">
                  naradaladurgaprasad@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
