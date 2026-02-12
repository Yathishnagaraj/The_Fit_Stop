import { motion } from "framer-motion";
import { Code, BarChart3, Palette, ShieldCheck, Rocket, Users } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web and mobile applications built with modern technologies and best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts. From wireframes to polished interfaces.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Turn raw data into actionable insights with our analytics and BI solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive security audits and solutions.",
  },
  {
    icon: Rocket,
    title: "Digital Strategy",
    description: "Strategic roadmaps that align technology investments with business goals.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Expert guidance to optimize your technology stack and operational workflows.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
