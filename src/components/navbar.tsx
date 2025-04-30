
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center h-16">
          {/* Centered Nav Container */}
          <div className="flex items-center gap-6 px-6 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-sm">
            {/* Avatar */}
            <Link to="/" className="flex-shrink-0">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/SnowDev.png" alt="SnowDev" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
            </Link>

            {/* Nav Links */}
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle */}
            <Button onClick={toggleTheme} variant="ghost" size="icon" className="h-8 w-8 rounded-full flex-shrink-0">
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
