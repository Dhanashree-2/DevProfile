import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div
          className={`text-2xl font-heading font-bold cursor-pointer transition-colors ${
            scrolled ? "text-white" : "bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          }`}
          onClick={() => scrollToSection("hero")}
        >
          Portfolio.
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate-300 hover:text-white"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button 
            variant={scrolled ? "secondary" : "default"} 
            size="sm" 
            onClick={() => scrollToSection("contact")}
            className={scrolled ? "bg-white text-slate-900 hover:bg-slate-200" : ""}
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={scrolled ? "text-white" : "text-foreground"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-lg font-medium text-slate-300 hover:text-white py-2"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
