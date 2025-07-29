import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform with advanced filtering, payment integration, and real-time inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    description: "Complete redesign of a mobile banking application focusing on user experience and accessibility.",
    technologies: ["Figma", "Prototyping", "User Research", "React Native"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    category: "Data Visualization",
    description: "Interactive dashboard for data analytics with AI-powered insights and real-time data processing.",
    technologies: ["Python", "React", "D3.js", "TensorFlow", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Creative Portfolio Website",
    category: "Web Development",
    description: "A stunning portfolio website for a creative agency with custom animations and interactive elements.",
    technologies: ["TypeScript", "Next.js", "Framer Motion", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Social Media Management Tool",
    category: "Web Development",
    description: "Comprehensive social media management platform with scheduling, analytics, and team collaboration features.",
    technologies: ["Vue.js", "Express", "Redis", "Docker", "Google Cloud"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description: "Cross-platform mobile app for fitness tracking with wearable device integration and social features.",
    technologies: ["React Native", "Firebase", "HealthKit", "Redux"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const categories = ["All", "Web Development", "UI/UX Design", "Mobile Development", "Data Visualization"];

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and creativity
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-gradient-primary shadow-glow' 
                  : 'hover:shadow-card'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="group overflow-hidden bg-gradient-card backdrop-blur-glass border border-border/20 shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-4"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center ${
                  hoveredProject === project.id ? 'opacity-90' : ''
                }`}>
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary" className="text-xs mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="text-xs border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-primary/20">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};