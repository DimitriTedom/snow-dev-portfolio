import { Achievement } from "@/components/ui/achievement-card";

export const achievementsData: Achievement[] = [
  {
    id: "figma-ui-ux",
    title: "Figma Essential for User Interface and User Experience UI UX",
    description: "Comprehensive course covering essential UI/UX design principles using Figma, including design systems, prototyping, and collaborative workflows.",
    url: "https://www.udemy.com/certificate/UC-229e7251-c2ea-42cc-a476-259e48e4de7b/",
    provider: "Udemy",
    date: "2024",
    category: "UI/UX Design",
    duration: "4 hours",
    imageUrl: "/achievements/figma-certificate.png"
  },
  {
    id: "react-mastery",
    title: "React: All You Need to Know with Practical Project",
    description: "Complete React development course covering hooks, state management, component architecture, and building real-world applications.",
    url: "https://www.udemy.com/course/all-you-need-to-know-react-with-practical-project/",
    provider: "Udemy",
    date: "2024",
    category: "Development",
    duration: "11 hours",
    imageUrl: "/achievements/react-certificate.png"
  },
  {
    id: "canva-100-designs",
    title: "Canva Badge for 100 Designs Milestone",
    description: "Achievement badge for completing 100+ professional designs using Canva Pro, demonstrating consistent creative output and design mastery.",
    url: "https://www.canva.com/design/DAGK4b16KpA/M_YxblMcTxqYWv4IOIkq8Q/view?utm_content=DAGK4b16KpA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hba4749c1aa",
    provider: "Canva",
    date: "2023",
    category: "Design",
    imageUrl: "/achievements/canva-100-badge.png"
  },
  {
    id: "canva-200-designs",
    title: "Canva Badge for 200 Designs Milestone", 
    description: "Expert-level achievement for completing 200+ designs, showcasing advanced design skills and creative versatility across multiple design categories.",
    url: "https://www.canva.com/design/DAGNB8csuOI/mYAxZfI7tUh0tujYhTcOBw/view?utm_content=DAGNB8csuOI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb6662589e2",
    provider: "Canva",
    date: "2023",
    category: "Design",
    imageUrl: "/achievements/canva-200-badge.png"
  },
  {
    id: "chatgpt-master",
    title: "ChatGPT Master: Complete OpenAI ChatGPT Course",
    description: "Comprehensive training on leveraging ChatGPT for productivity, content creation, and AI-assisted development workflows.",
    url: "https://www.udemy.com/certificate/UC-86d49de3-1f3e-4e56-93ef-59b10d62f338/",
    provider: "Udemy", 
    date: "2024",
    category: "AI & Productivity",
    duration: "4.5 hours",
    imageUrl: "/achievements/chatgpt-certificate.png"
  },
  {
    id: "wordpress-developer",
    title: "Complete WordPress Website Developer Course",
    description: "Full-stack WordPress development including custom themes, plugins, and e-commerce solutions using modern development practices.",
    url: "https://www.udemy.com/certificate/UC-c4310efd-233f-4671-8cba-e01ba2693a61/",
    provider: "Udemy",
    date: "2024", 
    category: "Development",
    duration: "5 hours",
    imageUrl: "/achievements/wordpress-certificate.png"
  },
  {
    id: "canva-passive-income", 
    title: "Canva, Midjourney & ChatGPT: Passive Income 2023",
    description: "Strategic course on monetizing design skills through AI-powered tools and automation for sustainable passive income generation.",
    url: "https://www.udemy.com/certificate/UC-a4de060f-0a3d-49b7-bd03-764a63e71f9a/",
    provider: "Udemy",
    date: "2023",
    category: "Business & AI",
    duration: "5.5 hours",
    imageUrl: "/achievements/passive-income-certificate.png"
  },
  {
    id: "canva-productivity",
    title: "Canva for Productivity: Design Faster with Time-Saving Techniques", 
    description: "Advanced Canva workflows and productivity techniques for rapid design creation and efficient creative processes.",
    url: "https://www.udemy.com/certificate/UC-620b3ce3-2719-4d38-b4e9-158dc89206d6/",
    provider: "Udemy",
    date: "2023",
    category: "Productivity",
    duration: "5.5 hours", 
    imageUrl: "/achievements/canva-productivity-certificate.png"
  },
  {
    id: "competition-winner",
    title: "ChezFlora E-commerce Challenge - 1st Place Winner",
    description: "Won first place in a competitive month-long development challenge creating a full-stack e-commerce platform with advanced features.",
    url: "https://chez-flora-sigma.vercel.app/",
    provider: "Competition",
    date: "April 2025",
    category: "Competition",
    imageUrl: "/achievements/competition-winner.png"
  },
  {
    id: "aws-in-progress",
    title: "AWS Solutions Architect Associate (In Progress)",
    description: "Currently pursuing AWS Solutions Architect certification, focusing on cloud architecture, security, and scalable infrastructure design.",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    provider: "AWS",
    date: "2025 Target",
    category: "Cloud Computing",
    imageUrl: "/achievements/aws-in-progress.png"
  }
];

// Filter achievements by category
export const getAchievementsByCategory = (category: string): Achievement[] => {
  if (category === "All") return achievementsData;
  return achievementsData.filter(achievement => achievement.category === category);
};

// Get unique categories
export const getAchievementCategories = (): string[] => {
  const categories = Array.from(new Set(achievementsData.map(achievement => achievement.category)));
  return ["All", ...categories.filter(Boolean)];
};

// Get achievements by provider
export const getAchievementsByProvider = (provider: string): Achievement[] => {
  return achievementsData.filter(achievement => achievement.provider === provider);
};