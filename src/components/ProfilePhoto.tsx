import { useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const ProfilePhoto = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex justify-center mb-12">
      {/* Animated background rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 border border-primary/20 rounded-full animate-rotate-slow" />
        <div className="absolute w-72 h-72 border border-accent/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      </div>
      
      {/* Profile photo container */}
      <div 
        className="relative z-10 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative w-64 h-64 rounded-full overflow-hidden transition-all duration-700 ${
          isHovered ? 'animate-profile-glow scale-110' : 'shadow-elegant'
        }`}>
          <img
            src={profilePhoto}
            alt="Profile"
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-110 brightness-110' : 'scale-100'
            }`}
          />
          
          {/* Overlay gradient on hover */}
          <div className={`absolute inset-0 bg-gradient-primary transition-opacity duration-500 ${
            isHovered ? 'opacity-20' : 'opacity-0'
          }`} />
          
          {/* Floating particles */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute top-4 left-4 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-8 left-12 w-2.5 h-2.5 bg-accent/70 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-primary/70 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        {/* Name and title */}
        <div className="text-center mt-8 space-y-2">
          <h3 className={`text-2xl font-bold transition-all duration-500 ${
            isHovered ? 'text-primary scale-105' : 'text-foreground'
          }`}>
            Alex Johnson
          </h3>
          <p className={`text-lg transition-all duration-500 ${
            isHovered ? 'text-accent' : 'text-muted-foreground'
          }`}>
            Creative Professional & Developer
          </p>
        </div>
      </div>
    </div>
  );
};