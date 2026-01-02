import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-lg">
              <div className="bg-primary p-6 md:w-32 flex items-center justify-center shrink-0">
                <GraduationCap className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Bachelor of Engineering (B.E.)</CardTitle>
                  <p className="text-primary font-medium">Computer Science & Engineering</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Completed specialized coursework in Operating Systems, Computer Networks, Database Management Systems, and Software Engineering.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Focus Areas:</span> System Architecture, Network Security, Algorithm Design
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
