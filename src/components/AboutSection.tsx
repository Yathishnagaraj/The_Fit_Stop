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
              A decade of delivering excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Founded in 2014, Apex is a forward-thinking technology and consulting firm 
              dedicated to helping organizations navigate digital transformation. We combine 
              deep industry knowledge with cutting-edge technology to deliver lasting impact.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team of 50+ professionals spans design, engineering, strategy, and data 
              science — working together to solve complex challenges for clients worldwide.
            </p>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "10+", label: "Years of experience" },
              { value: "200+", label: "Projects delivered" },
              { value: "50+", label: "Team members" },
              { value: "98%", label: "Client satisfaction" },
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
