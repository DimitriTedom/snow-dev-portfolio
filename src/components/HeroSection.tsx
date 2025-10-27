import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Globe, Play } from "lucide-react";

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
      ease: "easeInOut" as const,
    },
  };

  const partnerLogos = [
    { name: "React", image: "https://reactnative.dev/img/header_logo.svg" },
    { name: "Node.js", image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { name: "MongoDB", image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
    { name: "Docker", image: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
    { name: "AWS", image: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-background to-orange-50/30 dark:to-orange-950/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Develop your
                <br />
                <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  skills in a new
                </span>
                <br />
                and unique way
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Explore a comprehensive approach to web development that combines cutting-edge technologies with innovative design thinking to create exceptional digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <ButtonColorful
                label="Get Started"
                variant="orange"
                className="px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl h-14"
                asChild
              >
                <Link to="/projects" />
              </ButtonColorful>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg rounded-full border-2 hover:bg-secondary h-14 flex items-center gap-2"
                asChild
              >
                <Link to="/about">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Image & Floating Elements */}
          <div className="relative lg:flex justify-center items-center">
            <div className="relative max-w-lg mx-auto">
              {/* Main Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="/SnowDev.png"
                  alt="Dimitri Tedom - SnowDev"
                  className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                />
                
                {/* Purple decorative circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full -z-10 blur-3xl" />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -right-4 md:top-8 md:right-4 bg-white dark:bg-card rounded-2xl p-4 shadow-xl border border-orange-200/50 dark:border-orange-800/30 max-w-[200px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">JavaScript Expert</p>
                    <p className="text-xs text-muted-foreground">2+ Years Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-4 md:bottom-12 md:left-8 bg-white dark:bg-card rounded-2xl p-4 shadow-xl border border-purple-200/50 dark:border-purple-800/30 max-w-[180px]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">UI</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">UI/UX Design</p>
                    <p className="text-xs text-muted-foreground">Creative Solutions</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 md:-right-12 bg-white dark:bg-card rounded-2xl p-3 shadow-xl border border-green-200/50 dark:border-green-800/30"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-lg">95%</span>
                  </div>
                  <p className="text-xs font-semibold">Client Satisfaction</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Tech Stack Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 relative z-10"
        >
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-sm mb-6">Trusted by technologies and frameworks</p>
            <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap opacity-60 hover:opacity-100 transition-opacity">
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-8 w-8 md:h-10 md:w-10 object-contain filter dark:brightness-200" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
