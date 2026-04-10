const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Durgaprasad Naradala. All rights reserved.</p>
      <p>
        Built with <span className="text-primary">React</span> &{" "}
        <span className="text-primary">Tailwind CSS</span>
      </p>
    </div>
  </footer>
);

export default Footer;
