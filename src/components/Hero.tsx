import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-display">
            <span className="block text-foreground">Creative</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Professional
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend creativity with functionality. 
            Welcome to my portfolio journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-4">
              <Button variant="secondary" size="lg" className="hover:shadow-card transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="hover:shadow-card transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="hover:shadow-card transition-all duration-300">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent rounded-full opacity-30 animate-pulse delay-1000" />
    </section>
  );
};