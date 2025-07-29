import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, User, Tag, ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  images: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  year?: string;
  client?: string;
  duration?: string;
  role?: string;
}

interface PortfolioModalProps {
  project: PortfolioItem | null;
  open: boolean;
  onClose: () => void;
}

export const PortfolioModal = ({ project, open, onClose }: PortfolioModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-card backdrop-blur-glass border border-border/20">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {project.title}
            </DialogTitle>
            {project.featured && (
              <Badge className="bg-accent text-accent-foreground">
                Featured
              </Badge>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
            
            {project.images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={prevImage}
                  className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={nextImage}
                  className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Image indicators */}
            {project.images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Project Metadata */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Project Details</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    <span className="text-muted-foreground">Year:</span>
                    <span className="ml-2 text-foreground">{project.year || '2024'}</span>
                  </div>
                  
                  {project.client && (
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-accent" />
                      <span className="text-muted-foreground">Client:</span>
                      <span className="ml-2 text-foreground">{project.client}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center text-sm">
                    <Tag className="h-4 w-4 mr-2 text-accent" />
                    <span className="text-muted-foreground">Category:</span>
                    <span className="ml-2 text-foreground">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">Links</h3>
                <div className="flex flex-col space-y-3">
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Demo
                  </Button>
                  <Button 
                    variant="secondary"
                    className="w-full hover:shadow-card transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};