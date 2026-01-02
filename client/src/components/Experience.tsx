import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Building2 className="h-5 w-5" />
                    <span>Sutherland Global Services</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm bg-secondary px-3 py-1 rounded-full w-fit">
                    <Calendar className="h-4 w-4" />
                    <span>Present</span>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">Associate Engineer Software Developer</CardTitle>
                <p className="text-muted-foreground font-medium">Contingent Worker at Philips Innovation Campus</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>Specializing in Operating System security and hardening protocols.</li>
                      <li>Developing and maintaining scripts for automation and system management.</li>
                      <li>Expertise in Windows deployment strategies and infrastructure maintenance.</li>
                      <li>Collaborating with cross-functional teams to ensure system reliability and security compliance.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
