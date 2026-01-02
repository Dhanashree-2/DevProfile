import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "OS & Scripting",
    skills: ["Windows Deployment", "PowerShell", "Bash Scripting", "System Security", "OS Hardening", "Linux Administration"],
  },
  {
    title: "Development",
    skills: ["JavaScript", "Python", "HTML", "CSS", "ReactJS", "Java", "Version Control (Git)", "Software Development Lifecycle"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure Fundamentals", "CI/CD Pipelines", "Docker", "Infrastructure as Code", "Network Security"],
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "Jira", "ServiceNow", "Active Directory", "MDT"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency areas, with a focus on system engineering and automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-3 py-1 text-sm font-normal hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
