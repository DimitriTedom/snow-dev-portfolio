import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";

const HeroSection = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const skills = ["Prototype", "Dashboard", "Mobile App Design", "Design System", "Website Design"];
  const socialLinks = [
    { icon: Github, url: "https://github.com/DimitriTedom", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/dimitri-tedom", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/dimitri-tedom", label: "Twitter" },
    { icon: Globe, url: "https://snowdev-portfolio.vercel.app", label: "Website" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-5 space-y-6">
            {/* Greeting Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Badge 
                variant="outline" 
                className="text-sm px-4 py-2 border-2 border-orange-500/30 bg-orange-50/50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 mb-4"
              >
                <span className="mr-2">👋</span>
                Hello There!
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="space-y-2"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                I'm <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Dimitri Tedom</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-md"
            >
              Full Stack JavaScript Developer based in Cameroon
            </motion.p>

            {/* Testimonial Quote */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative pl-6 border-l-4 border-orange-500 py-2"
            >
              <span className="absolute -left-2 -top-2 text-4xl text-orange-500/30">"</span>
              <p className="text-sm italic text-muted-foreground">
                SnowDev's Remarkable Design Transformed Our Website - Highly Recommended!
              </p>
            </motion.div>

            {/* Reviews Section */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-orange-500">150+ Reviews</p>
                <p className="text-sm text-muted-foreground">
                  <span className="text-yellow-500">★★★★★</span> (4.9 of 5)
                </p>
                <p className="text-xs text-muted-foreground">Across both Work Clients</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link to="/projects">
                  Portfolio 
                  <span className="ml-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg rounded-full border-2 hover:bg-secondary"
                asChild
              >
                <Link to="/contact">Hire Me</Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="pt-4"
            >
              <p className="text-sm text-muted-foreground mb-3">Follow Me On:</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary hover:bg-accent flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image & Skills */}
          <div className="lg:col-span-7 relative">
            <div className="relative">
              {/* Main Image Container with Orange Circle Background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto max-w-md lg:max-w-lg"
              >
                {/* Orange Circle Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-orange-500 to-red-500 rounded-full -z-10" />
                
                {/* Profile Image */}
                <img
                  src="/SnowDev.png"
                  alt="Dimitri Tedom - SnowDev"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                />

                {/* Floating Badge - Top Right */}
                <motion.div
                  className="absolute -top-4 -right-4 md:top-8 md:right-0 bg-white dark:bg-card rounded-full px-4 py-2 shadow-lg border-2 border-orange-500/20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs font-semibold text-orange-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Hire a expert
                  </p>
                </motion.div>
              </motion.div>

              {/* Skill Tags - Positioned around the image */}
              <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none">
                {skills.map((skill, index) => {
                  const positions = [
                    "top-12 right-0",
                    "top-32 right-4",
                    "top-56 right-8",
                    "bottom-32 right-12",
                    "bottom-12 right-4",
                  ];
                  
                  return (
                    <motion.div
                      key={skill}
                      className={`absolute ${positions[index]} pointer-events-auto`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <Badge
                        className={`${
                          index % 2 === 0
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-0"
                            : "bg-card border-2 border-orange-500/20"
                        } px-3 py-1.5 text-xs font-medium shadow-lg whitespace-nowrap`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Categories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="container mx-auto px-4 mt-20 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { title: "Website Design", icon: "🌐" },
            { title: "Dashboard", icon: "📊" },
            { title: "Wireframe", icon: "📐" },
            { title: "User Research", icon: "🔍" },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              className="text-center p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              <h3 className="font-semibold text-sm">{category.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
