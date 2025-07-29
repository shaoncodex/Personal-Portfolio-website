import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-card backdrop-blur-glass border border-border/20 shadow-card">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, or just having a friendly conversation about design and technology.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-muted-foreground">Available Worldwide</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card backdrop-blur-glass border border-border/20 shadow-card">
              <h3 className="text-xl font-semibold mb-4 text-accent">Why Work With Me?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Dedicated to delivering exceptional results
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  Clear communication throughout the project
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Modern, scalable solutions that grow with your business
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  Ongoing support and maintenance
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card backdrop-blur-glass border border-border/20 shadow-card">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="Project Inquiry"
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};