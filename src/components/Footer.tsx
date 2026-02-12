const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-xl">
          FitStop<span className="text-accent">.</span>
        </p>
        <p className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} FitStop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
