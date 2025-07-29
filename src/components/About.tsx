import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-card backdrop-blur-glass border border-border/20 shadow-card hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate creative professional who believes in the power of design and technology 
                to solve real-world problems. My journey began with a curiosity about how things work 
                and evolved into a love for creating digital experiences that matter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a focus on user-centered design and modern development practices, I bring ideas 
                to life through clean code, thoughtful design, and innovative solutions that drive results.
              </p>
            </Card>
            
            <Card className="p-8 bg-gradient-card backdrop-blur-glass border border-border/20 shadow-card hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-accent">What Drives Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm driven by the challenge of turning complex problems into elegant solutions. 
                Whether it's crafting a seamless user interface or building robust applications, 
                I'm always pushing the boundaries of what's possible.
              </p>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-card backdrop-blur-glass border border-border/20 shadow-card">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'UI/UX Design', 'React', 'TypeScript', 'Node.js', 'Python', 
                  'Figma', 'Adobe Creative Suite', 'Web Development', 'Mobile Design',
                  'API Development', 'Database Design', 'Cloud Computing'
                ].map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-card backdrop-blur-glass border border-border/20 shadow-card">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Passion</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};