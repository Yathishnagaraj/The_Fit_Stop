import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              About Us
            </p>
             <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Great games deserve great fuel
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              At FitStop, we are a premium vending machine provider dedicated to upgrading 
              the sports facility experience. We know that after a high-intensity match of 
              badminton, cricket, or pickleball, athletes need more than just sugar and empty 
              calories — they need recovery.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We bridge the gap between convenience and nutrition, providing your players 
              with the high-quality energy they need to perform their best and recover faster.
            </p>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "100%", label: "Hassle-free management" },
              { value: "24/7", label: "Maintenance support" },
              { value: "0%", label: "Junk food" },
              { value: "100%", label: "Performance fuel" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <p className="font-heading text-4xl text-accent mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
