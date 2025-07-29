import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-bold text-2xl font-display mb-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion and precision.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="secondary" size="sm" className="hover:shadow-card transition-all duration-300">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm" className="hover:shadow-card transition-all duration-300">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm" className="hover:shadow-card transition-all duration-300">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary" /> by Your Name • © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};