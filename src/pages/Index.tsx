import "@/styles/global.css";
import Layout from "@/components/layout";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AchievementCard } from "@/components/ui/achievement-card";
import { achievementsData } from "@/data/achievements";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeIn, SlideUp, SlideInRight, StaggeredContainer, StaggeredItem } from "@/components/motion";
import { Briefcase, Code, Layers, Sparkles, Trophy } from "lucide-react";

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
	{ name: "Docker", category: "DevOps" },
	{ name: "AWS", category: "Cloud" },
];

const experiences = [
	{
		company: "Worketyamo",
		position: "Graphic Designer, Full stack Developer Teacher",
		duration: "2023-Present",
		type: "Part-time",
	},
	{
		company: "Master Language & Technology Institute",
		position: "Community Manager, Full Stack JS Developer",
		duration: "April 2025-Present",
		type: "Full-time",
	},
];

const projects = [
	{
		title: "NjangiTech - Tontine Management",
		category: "Web Apps",
		date: "Feb 6, 2026",
		image: "/tontine-app.png",
	},
	{
		title: "ChezFlora E-commerce Web App",
		category: "Web Apps",
		date: "April 20, 2025",
		image: "/ChezFlora_Thumbnail.png",
	},
	{
		title: "STS Library Design",
		category: "UI/UX Design",
		date: "Sep 20, 2024",
		image: "/UI_UX_Thumbnail.png",
	},
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
	{ name: "Docker", image: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
	{ name: "AWS", image: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
];

const Index = () => {
	return (
		<Layout>
			{/* Hero Section */}
			<HeroSection />

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
								<Code className="h-5 w-5 text-orange-500" />
								<span className="text-sm text-orange-500 font-medium tracking-wider uppercase">Skills & Expertise</span>
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
										transition: { staggerChildren: 0.05 },
									},
								}}
								initial="hidden"
								animate="visible"
							>
								{skills.map((skill) => (
									<motion.div
										key={skill.name}
										variants={{
											hidden: { opacity: 0, y: 10 },
											visible: { opacity: 1, y: 0 },
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
						<Sparkles className="h-5 w-5 text-orange-500" />
						<span className="text-sm text-orange-500 font-medium tracking-wider uppercase">Portfolio</span>
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
							<Layers className="h-5 w-5 text-orange-500" />
							<span className="text-sm text-orange-500 font-medium tracking-wider uppercase">Essential Stack</span>
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

			{/* Featured Achievements Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<FadeIn className="text-center mb-12">
						<div className="flex items-center gap-2 mb-2 justify-center">
							<Trophy className="h-5 w-5 text-yellow-500" />
							<span className="text-sm text-yellow-500 font-medium tracking-wider uppercase">Achievements</span>
						</div>
						<h2 className="text-2xl md:text-3xl font-bold mb-4">Notable Accomplishments</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Some of my certifications and achievements that showcase my commitment to continuous learning and excellence.
						</p>
					</FadeIn>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{achievementsData.slice(0, 3).map((achievement, index) => (
							<motion.div
								key={achievement.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								<AchievementCard
									achievement={achievement}
									showPreview={true}
									className="h-full"
								/>
							</motion.div>
						))}
					</div>

					<FadeIn className="text-center">
						<Button variant="outline" asChild>
							<Link to="/achievements">View All Achievements</Link>
						</Button>
					</FadeIn>
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
							<ButtonColorful
								label="Let's Talk 👋️"
								variant="orange"
								className="px-8 h-12"
								asChild
							>
								<Link to="/contact">Let's Talk 👋️</Link>
							</ButtonColorful>
						</SlideUp>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Index;
