
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeIn, SlideUp, SlideInRight, StaggeredContainer, StaggeredItem } from "@/components/motion";
import { Briefcase, Code, Layers, Sparkles } from "lucide-react";

// Define data
const skills = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "UI/UX Design", category: "Design" },
  { name: "Figma", category: "Design" },
  { name: "Canva", category: "Design" },
  { name: "n8n", category: "AI & Automation" },

];

const experiences = [
  {
    company: "Worketyamo",
    position: "Graphic Designer",
    duration: "2023-Present",
    type: "Part-time"
  },
  {
    company: "Master Language & Technology Institute",
    position: "Community Manager",
    duration: "April 2025-Present",
    type: "Full-time"
  }
];

const projects = [
  {
    title: "Youtube Thumbnail Design",
    category: "Product Design",
    date: "Mar 22, 2025",
    image: "/ChesFlora Demo_Thumbnail.png"
  },
  {
    title: "STS Library Design",
    category: "UI/UX Design",
    date: "Sep 20, 2024",
    image: "/UI_UX_Thumbnail.png"
  },
  {
    title: "ChezFlora E-commerce Web App",
    category: "Landing Page",
    date: "April 2, 2025",
    image: "/ChezFlora_Thumbnail.png"
  }
];

const essentialStacks = [
  { name: "Canva", image: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
  { name: "Figma", image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
  { name: "React", image: "https://reactnative.dev/img/header_logo.svg" },
  { name: "Redux Toolkit", image: "https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg" },
  { name: "Tailwind css", image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Typescript", image: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
  { name: "Node.js", image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
  { name: "MongoDB", image: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  { name: "Express.Js", image: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
  { name: "Next.js", image: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" },
  { name: "Vite", image: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg" },

];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <p className="text-muted-foreground mb-3">Hey there!</p>
              </FadeIn>
              
              <SlideUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  I'm Dimitri (SnowDev), a <span className="text-gradient">MERN developer</span> & <span className="text-gradient">Designer</span>. <br/> I design,code & deploy Web Apps.
                </h1>
              </SlideUp>
              
              <SlideUp delay={0.2}>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                  Available for Freelancing • RFJW+9RJ, Yaoundé
                </p>
              </SlideUp>
              
              <SlideUp delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button size="pill" variant="action" asChild className="px-8">
                    <Link to="/contact">Get in Touch 👋️</Link>
                  </Button>
                  <Button size="pill" variant="outline" asChild>
                    <Link to="/projects">View Projects</Link>
                  </Button>
                </div>
              </SlideUp>
            </div>
            
            <SlideInRight className="relative lg:flex justify-center items-center hidden">
              <div className="relative w-full rounded-2xl overflow-hidden">
                <img 
                  src="/SnowDev.png"
                  alt="SnowDev Profile" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 flex flex-col gap-2">
                  {["LLMS-Automation", "UX/UI design", "Graphic design","MERN Developer"].map((skill, i) => (
                    <div 
                      key={skill}
                      className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full inline-block"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <FadeIn>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-5 w-5 text-orange-500" />
                  <span className="text-sm text-orange-500 font-medium tracking-wider uppercase">Experience</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Work Experience</h2>
                <p className="text-muted-foreground mb-8 lg:mb-0">
                  Over 2 years of experience working with startups and established companies in the tech industry.
                </p>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-8">
              <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experiences.map((exp) => (
                  <StaggeredItem key={exp.company}>
                    <Card className="overflow-hidden h-full glass">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <span className="text-xs text-muted-foreground block mb-1">{exp.duration}</span>
                          <h3 className="text-xl font-semibold">{exp.company}</h3>
                          <p className="text-muted-foreground">{exp.position} • {exp.type}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                ))}
              </StaggeredContainer>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <FadeIn>
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-blue-500 font-medium tracking-wider uppercase">Skills & Expertise</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Technical Proficiencies</h2>
                <p className="text-muted-foreground mb-8 lg:mb-0">
                  A versatile skill set that combines modern frontend and backend development with strong design sensibilities.
                </p>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-8">
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.05 }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <Badge variant="secondary" className="px-3 py-1 text-sm">
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <div className="flex items-center gap-2 mb-2 justify-center">
              <Sparkles className="h-5 w-5 text-purple-500" />
              <span className="text-sm text-purple-500 font-medium tracking-wider uppercase">Portfolio</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Works & Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out some of my design projects, meticulously crafted with love and dedication.
            </p>
          </FadeIn>
          
          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <StaggeredItem key={project.title}>
                <Link to="/projects" className="group block">
                  <Card className="overflow-hidden h-full border-0 shadow-lg">
                    <div className="relative h-60 w-full overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{project.category}</span>
                        <span className="text-xs text-muted-foreground">{project.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="pill" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <FadeIn>
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-green-500 font-medium tracking-wider uppercase">Essential Stack</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">My Favorite Tools</h2>
                <p className="text-muted-foreground mb-8 lg:mb-0">
                  A comprehensive collection of useful tools to support and optimize my workflow.
                </p>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {essentialStacks.map((stack, index) => (
                  <motion.div
                    key={stack.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="h-12 w-12 mb-2 flex items-center justify-center rounded-lg bg-card p-2">
                      <img src={stack.image} alt={stack.name} className="h-8 w-8 object-contain" />
                    </div>
                    <span className="text-xs text-center">{stack.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SlideUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to kickstart your project with a touch of magic?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Reach out and let's make it happen! I'm here to turn your ideas into reality with effective design and development.
              </p>
              <Button size="pill" variant="action" asChild className="px-8">
                <Link to="/contact">Let's Talk 👋️</Link>
              </Button>
            </SlideUp>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
