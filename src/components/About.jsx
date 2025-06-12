import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Download, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: <FaGithub className="h-6 w-6" />, 
      href: 'https://github.com/Srinivas-2410',
      label: 'GitHub'
    },
    { 
      icon: <FaLinkedin className="h-6 w-6" />, 
      href: 'https://linkedin.com/in/srinivas-k-s',
      label: 'LinkedIn'
    },
    { 
      icon: <Mail className="h-6 w-6" />, 
      href: 'mailto:srinivasks898@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <div className="container max-w-6xl">
      <div className="min-h-screen flex flex-col justify-center relative py-8 px-4 sm:px-6 md:px-8">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div 
          className={`text-center relative transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 text-foreground font-sans">
            Srinivas K S
          </h1>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-foreground font-sans">
            Full Stack Developer
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
            <Button
              size="lg"
              onClick={handleContactClick}
              className="w-full sm:w-auto text-base sm:text-lg py-6 px-8
                bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary
                transform transition-all hover:-translate-y-0.5"
            >
              Let's Connect
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg py-6 px-8
                transform transition-all hover:-translate-y-0.5"
              asChild
            >
              <a href="/resume.pdf" download className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                <span>Download CV</span>
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 mb-8 sm:mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full hover:bg-primary/10 transform transition-all 
                  hover:scale-110 hover:text-primary text-foreground"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="hidden md:block absolute -bottom-16 left-1/2 -translate-x-1/2 
            text-muted-foreground animate-bounce">
            <ChevronDown className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}