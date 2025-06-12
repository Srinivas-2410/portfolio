import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-16 relative">
      <div
        className={`
          container max-w-4xl text-center
          transition-all duration-1000 transform
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-foreground font-sans">
          Resume
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto px-4 mb-8">
          <Button
            variant="outline"
            size="lg"
            className="group w-full sm:w-auto text-nowrap transition-all duration-300 hover:-translate-y-0.5"
            asChild
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-xl font-semibold"
            >
              <FileText size={24} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              View Resume
            </a>
          </Button>

          <Button
            size="lg"
            className="group w-full sm:w-auto text-nowrap transition-all duration-300 hover:-translate-y-0.5"
            asChild
          >
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center text-xl font-semibold"
            >
              <Download size={24} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Add your resume content here if needed */}

        {/* Background gradients */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}

