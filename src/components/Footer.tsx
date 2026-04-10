const Footer = () => (
  <footer className="relative border-t border-border/80 bg-muted/[0.06] py-12 px-6">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
      <p className="text-center md:text-left">
        &copy; {new Date().getFullYear()} Durgaprasad Naradala. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
