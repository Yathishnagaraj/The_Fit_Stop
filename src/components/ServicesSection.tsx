import { motion } from "framer-motion";
import { Droplets, Beef, Cookie, Zap, Package, Wrench } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Sports Drinks & Electrolytes",
    description: "Premium electrolytes and sports drinks to replenish what the game took out.",
  },
  {
    icon: Beef,
    title: "Protein Bars",
    description: "High-quality protein bars to help muscles rebuild post-match.",
  },
  {
    icon: Cookie,
    title: "Healthy Snacks",
    description: "Protein chips, roasted nuts, and savory snacks that satisfy cravings without the cheat meal regret.",
  },
  {
    icon: Zap,
    title: "Natural Energy Boosters",
    description: "Zero-sugar beverages and natural energy boosters for that extra edge.",
  },
  {
    icon: Package,
    title: "Fully Managed Inventory",
    description: "We monitor stock levels and restock frequently so the machine is never empty.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Our maintenance team is on standby to fix any issue immediately. You don't lift a finger.",
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
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            Products & Services
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
