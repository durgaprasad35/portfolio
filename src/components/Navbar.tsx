import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container mx-auto max-w-6xl px-5 md:px-6 transition-all duration-300 ${
          scrolled ? "glass-card-strong rounded-2xl py-2.5 shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="font-heading text-xl font-bold gradient-text tracking-tight ring-offset-2 ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg px-1"
          >
            DN
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-primary/5 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-3/5" />
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl glass-card text-foreground hover:border-primary/25 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-5 pt-3 animate-fade-up">
          <div className="glass-card-strong rounded-2xl p-2 shadow-xl">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
