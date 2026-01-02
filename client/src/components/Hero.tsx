import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/generated_images/professional_headshot_of_a_software_engineer.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background Elements (NON-INTERACTIVE) */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-t from-background to-transparent" />

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Available for Opportunities
          </span>

          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6 text-foreground">
            Associate Engineer <br />
            <span className="text-primary">Software Developer</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Specialized in OS security, scripting, and Windows deployment.
            Currently working at Philips Innovation Campus to deliver robust
            technical solutions.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button size="lg" className="rounded-full px-8"onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
            </a>

            <a href="#contact">
              <Button variant="outline" size="lg" className="rounded-full px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6 mt-12 relative z-20">
            <a
              href="https://github.com/Dhanashree-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/dhanashreesg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="mailto:dhanashreesg@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-3xl" />
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-background relative z-10 rotate-3 transition-transform hover:rotate-0 duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* SCROLL DOWN ARROW */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer text-muted-foreground"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
