
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, User, Briefcase, Mail, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "About", path: "/about", icon: User },
  { name: "Achievements", path: "/achievements", icon: Award },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Get current active tab based on location
  const getCurrentTab = () => {
    const currentPath = location.pathname;
    // Don't highlight any nav link for home page since avatar serves as home
    if (currentPath === "/") return "";
    const activeLink = navLinks.find(link => link.path === currentPath);
    return activeLink ? activeLink.name : "";
  };

  const [activeTab, setActiveTab] = useState(getCurrentTab());

  useEffect(() => {
    setActiveTab(getCurrentTab());
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6">
      <div className="flex items-center gap-3 bg-background/10 border border-border/50 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg">
        {/* Avatar */}
        <Link to="/" className="flex-shrink-0 px-2">
          <Avatar className="h-8 w-8 border">
            <AvatarImage src="/SnowDev.png" alt="SnowDev" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
        </Link>

        {/* Nav Links with TubeLight Effect */}
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.name;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setActiveTab(link.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "text-primary"
                )}
              >
                <span className="hidden md:inline">{link.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-lamp"
                    className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <Button 
          onClick={toggleTheme} 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 rounded-full flex-shrink-0 hover:bg-primary/10"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
