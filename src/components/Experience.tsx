import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Creative Developer",
    company: "Innovative Design Studio",
    period: "2022 - Present",
    location: "Remote",
    description: "Leading creative development projects, mentoring junior developers, and implementing cutting-edge design systems that have increased client satisfaction by 40%.",
    technologies: ["React", "TypeScript", "Figma", "Node.js", "AWS"]
  },
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - 2022",
    location: "San Francisco, CA",
    description: "Developed and maintained multiple web applications, collaborated with design teams to create pixel-perfect implementations, and optimized application performance.",
    technologies: ["JavaScript", "Python", "PostgreSQL", "Docker", "Git"]
  },
  {
    title: "UI/UX Designer & Developer",
    company: "Creative Agency",
    period: "2019 - 2020",
    location: "New York, NY",
    description: "Designed and developed user interfaces for web and mobile applications, conducted user research, and created prototypes that improved user engagement by 60%.",
    technologies: ["Adobe XD", "React", "SCSS", "MongoDB", "Express"]
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2018 - 2019",
    location: "Austin, TX",
    description: "Contributed to frontend development of multiple products, learned modern development practices, and assisted in the creation of responsive web applications.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Firebase"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-background rounded-full" />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="p-6 bg-gradient-card backdrop-blur-glass border border-border/20 shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
                      <h4 className="text-lg font-medium text-accent mb-3">{exp.company}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};