import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
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

  // Typewriter effect words for professional titles
  const professionalTitles = [
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "JS",
      className: "text-orange-500 dark:text-orange-400",
    },
    {
      text: "Developer",
    },
    {
      text: "•",
      className: "text-muted-foreground",
    },
    {
      text: "UI/UX",
      className: "text-blue-500 dark:text-blue-400",
    },
    {
      text: "Designer",
    },
    {
      text: "•",
      className: "text-muted-foreground",
    },
    {
      text: "AI",
      className: "text-purple-500 dark:text-purple-400",
    },
    {
      text: "Automation",
      className: "text-purple-500 dark:text-purple-400",
    },
    {
      text: "Expert",
    },
    {
      text: "•",
      className: "text-muted-foreground",
    },
    {
      text: "AWS",
      className: "text-green-500 dark:text-green-400",
    },
    {
      text: "Cloud",
      className: "text-green-500 dark:text-green-400",
    },
    {
      text: "Architect",
    },
  ];

  const partnerLogos = [
    { name: "React", image: "https://reactnative.dev/img/header_logo.svg" },
    { name: "Node.js", image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { name: "MongoDB", image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
    { name: "n8n", image: "https://docs.n8n.io/assets/images/n8n-logo-8a9dc1e2c78516f1b83a54fa4fac9e8d.png" },
    { name: "Docker", image: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
    { name: "AWS", image: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  ];

  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 md:pt-32 pb-10 sm:pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-background via-background to-orange-50/30 dark:to-orange-950/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 sm:top-20 right-5 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Main Heading */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="space-y-4 sm:space-y-6"
            >
              <div className="mb-2 sm:mb-4">
                <span className="text-base sm:text-lg md:text-xl text-orange-500 font-medium">👋 Hi, I'm Dimitri</span>
              </div>
              
              {/* Typewriter Effect for Professional Titles */}
              <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px]">
                <TypewriterEffectSmooth 
                  words={professionalTitles}
                  className="justify-start text-left"
                  cursorClassName="bg-orange-500"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-2 sm:mt-4">
                <span className="text-sm sm:text-base text-muted-foreground">Also known as</span>
                <span className="text-orange-500 font-semibold text-sm sm:text-base">SnowDev</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              From crafting modern React apps to designing stunning UI/UX experiences, automating workflows with n8n, and building scalable cloud infrastructure on AWS. I'm your go-to expert for end-to-end digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <ButtonColorful
                label="Get Started"
                variant="orange"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl h-12 sm:h-14 w-full sm:w-auto"
                asChild
              >
                <Link to="/projects">Get Started</Link>
              </ButtonColorful>
              <Button
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full border-2 hover:bg-secondary h-12 sm:h-14 flex items-center justify-center gap-2 w-full sm:w-auto"
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
          <div className="relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              {/* Main Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-orange-500/20 dark:ring-orange-400/30 bg-gradient-to-br from-orange-50/50 to-purple-50/50 dark:from-orange-950/30 dark:to-purple-950/30 p-4 sm:p-6 md:p-8">
                  <img
                    src="/home-img.jpg"
                    alt="Dimitri Tedom - SnowDev"
                    className="w-full h-auto object-contain drop-shadow-2xl relative z-0 rounded-2xl"
                  />
                </div>
                
                {/* Purple decorative circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full -z-10 blur-3xl" />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:top-4 md:right-2 lg:top-8 lg:right-4 bg-white dark:bg-card rounded-2xl p-2 sm:p-3 md:p-4 shadow-xl border border-orange-200/50 dark:border-orange-800/30 max-w-[160px] sm:max-w-[180px] md:max-w-[200px] z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">⚛️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white">Full Stack Developer</p>
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300">React • Node.js • MongoDB</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:-left-4 md:bottom-8 md:left-4 lg:bottom-12 lg:left-8 bg-white dark:bg-card rounded-2xl p-2 sm:p-3 md:p-4 shadow-xl border border-blue-200/50 dark:border-blue-800/30 max-w-[160px] sm:max-w-[180px] md:max-w-[200px] z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">🎨</span>
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white">UI/UX Designer</p>
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300">Figma • Canva • Adobe</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -left-6 sm:-left-8 md:-left-8 lg:-left-12 bg-white dark:bg-card rounded-2xl p-2 sm:p-3 shadow-xl border border-purple-200/50 dark:border-purple-800/30 max-w-[140px] sm:max-w-[160px] md:max-w-[180px] z-20"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">🤖</span>
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white">AI Automation</p>
                    <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300">n8n Expert</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 sm:-right-8 md:-right-8 lg:-right-12 bg-white dark:bg-card rounded-2xl p-2 sm:p-3 shadow-xl border border-green-200/50 dark:border-green-800/30 z-20"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-center">
                  <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <span className="text-white font-bold text-xs sm:text-sm">☁️</span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-900 dark:text-white">AWS Cloud Architect</p>
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
          className="mt-12 sm:mt-16 md:mt-20 relative z-10"
        >
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">Trusted by technologies and frameworks</p>
            <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap opacity-60 hover:opacity-100 transition-opacity">
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
                    className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain filter dark:brightness-200" 
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
