import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Download } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A professional, responsive portfolio website built to showcase skills, experience, and projects. Features smooth animations, a clean modern UI, and a contact form.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/",
    demoLink: "#",
    featured: true
  },
  {
    title: "Job Application Tracker",
    description: "A comprehensive tool to track job applications, interview statuses, and follow-ups. Helps organize the job search process with a user-friendly dashboard.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/",
    demoLink: "#",
    featured: true
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects demonstrating my technical capabilities and problem-solving skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Code2 className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="font-mono text-xs">
                      {project.featured ? "Featured" : "Project"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex gap-4">
                  <Button asChild variant="outline" className="flex-1 gap-2">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  </Button>
                  <Button asChild className="flex-1 gap-2">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
