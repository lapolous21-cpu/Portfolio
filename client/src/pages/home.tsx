import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Cpu, 
  Mail, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  ChevronDown,
  Terminal,
  Zap
} from "lucide-react";
import { portfolioData } from "@/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import heroBg from '@assets/generated_images/abstract_dark_tech_circuit_background.png';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tighter flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="hidden sm:inline">Technician.dev</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-primary transition-colors">Education</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-primary font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Available for opportunities</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
              Building reliable <br />
              <span className="text-gradient">technical systems.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              {portfolioData.about}
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-8 flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('projects')} size="lg" className="rounded-full text-base px-8 h-12">
                View Projects
              </Button>
              <Button onClick={() => scrollToSection('experience')} variant="outline" size="lg" className="rounded-full text-base px-8 h-12 border-white/10 hover:bg-white/5">
                My Experience
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-black/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Experience</h2>
          </div>

          <div className="space-y-8 relative pl-8 border-l border-white/10 ml-4 md:ml-10">
            {portfolioData.experience.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-background border-4 border-primary" />
                
                <Card className="glass-card border-none bg-card/40">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-primary">{exp.title}</CardTitle>
                        <CardDescription className="text-lg text-foreground/90 mt-1">{exp.company}</CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full w-fit">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.start_date} - {exp.end_date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location} ({exp.work_mode})</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  {exp.skills && (
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp} custom={index}>
                <Card className="h-full glass-card hover:border-primary/50 transition-all duration-300 group cursor-default">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                      <Cpu className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-black/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold">Education</h2>
          </div>

          <div className="grid gap-6">
            {portfolioData.education.map((edu, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-card/30 border border-white/5 hover:bg-card/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <Badge variant="outline" className="w-fit border-white/10 text-muted-foreground">
                        {edu.start_date} - {edu.end_date}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium text-lg">{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.field}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/40 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 font-display font-bold text-2xl mb-6">
            <Terminal className="w-6 h-6 text-primary" />
            <span>Technician.dev</span>
          </div>
          <p className="text-muted-foreground mb-8">
            Passionate about electronics, robotics, and creating reliable systems.
          </p>
          <div className="flex justify-center gap-6">
            {/* Placeholder social links since data was empty, but UI needs them */}
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 rounded-full">
              <Mail className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 rounded-full">
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
          <div className="mt-12 text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
