import Layout from "@/components/layout";
import {
  FadeIn,
  SlideUp,
  StaggeredContainer,
  StaggeredItem,
} from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  Award,
  BookOpen,
  Calendar,
  GraduationCap,
  Trophy,
  UserCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const About = () => {
  // Data for education and certifications
  const education = [
    {
      degree:
        "GCE A-Levels in Mathematics, Futher Maths, Physics, Chemistry, and Biology",
      institution: "GBHS Mbalmayo",
      year: "2022-2023",
      description:
        "Graduated with honors,excited for plain time focus on web development and UI/UX design.",
    },
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect Associate (In progress)",
      issuer: "AWS",
      year: "2025",
    },
  ];

  const achievements = [
    {
      title:
        "Figma Essential for User Interface and User Experience UI UX - 4hrs",
      url: "https://www.udemy.com/certificate/UC-229e7251-c2ea-42cc-a476-259e48e4de7b/",
    },
    {
      title: "React: All You Need to Know with Practical Project - 11 hrs",
      url: "https://www.udemy.com/course/all-you-need-to-know-react-with-practical-project/",
    },
    {
      title: "Canva badge for the 100 designs milestone",
      url: "https://www.canva.com/design/DAGK4b16KpA/M_YxblMcTxqYWv4IOIkq8Q/view?utm_content=DAGK4b16KpA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hba4749c1aa",
    },
    {
      title: "Canva badge for the 200 designs milestone",
      url: "https://www.canva.com/design/DAGNB8csuOI/mYAxZfI7tUh0tujYhTcOBw/view?utm_content=DAGNB8csuOI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb6662589e2",
    },
    {
      title:
        "Canva, Midjourney & ChatGPT: The Best Passive income in 2023 - 5,5hrs",
      url: "https://www.udemy.com/certificate/UC-a4de060f-0a3d-49b7-bd03-764a63e71f9a/",
    },
    {
      title:
        "Canva for Productivity: Design Faster Smarter with Time-Saving Techniques - 5,5hrs",
      url: "https://www.udemy.com/certificate/UC-620b3ce3-2719-4d38-b4e9-158dc89206d6/",
    },
    {
      title: "ChatGPT Master: Complete OpenAI ChatGPT Course - 4,5 hrs",
      url: "https://www.udemy.com/certificate/UC-86d49de3-1f3e-4e56-93ef-59b10d62f338/",
    },
    {
      title: "Complete Wordpress Website Developer Course - 5hrs",
      url: "https://www.udemy.com/certificate/UC-c4310efd-233f-4671-8cba-e01ba2693a61/",
    },
  ];

  // Direct download links for CVs
  const developerCvUrl =
    "https://drive.google.com/file/d/1MzRhQR2Vbtni0Wq4DrzExBhafla_UDNi/view?usp=sharing";
  const designerCvUrl =
    "https://drive.google.com/file/d/1sxbLP6g6KNNlgQ-uIAXa4ouvHWP2g_iC/view?usp=sharing";

  // Convert Google Drive view links to direct download links
  const getDirectDownloadLink = (driveLink: string) => {
    const fileId = driveLink.split("/d/")[1].split("/view")[0];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  };

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
              <p className="text-muted-foreground text-lg">
                Learn more about my journey, skills, and what drives me as a
                developer and designer.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="md:col-span-1">
                <SlideUp>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img
                      src="/SnowDev.png"
                      alt="SnowDev"
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white"
                    >
                      <a href={getDirectDownloadLink(developerCvUrl)}>
                        <ArrowDown className="mr-2 h-4 w-4" />
                        Download Developer CV
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                    >
                      <a href={getDirectDownloadLink(designerCvUrl)}>
                        <ArrowDown className="mr-2 h-4 w-4" />
                        Download Designer CV
                      </a>
                    </Button>
                  </div>
                </SlideUp>
              </div>

              <div className="md:col-span-2">
                <SlideUp delay={0.1}>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <UserCircle2 className="h-5 w-5 text-blue-500" />
                      <h2 className="text-xl font-semibold">Who I Am</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      I'm Tedom Dimitri, a passionate MERN Stack Developer and
                      UI/UX Designer with 2+ years of experience crafting
                      digital experiences that blend functionality with
                      aesthetic appeal. Based in Cameroon, I specialize in
                      designing, building and deploy robust and scalable web
                      applications using MongoDB, Express.js, React, and
                      Node.js.
                    </p>
                    <p className="text-muted-foreground">
                      My approach combines technical expertise with design
                      thinking from both graphic and UI/UX, allowing me to
                      create solutions that are not only technically sound but
                      also intuitive and visually appealing. I believe in
                      creating software that solves real problems while
                      providing delightful user experiences. I containerize and
                      deploy applications with Docker and work toward AWS cloud
                      certifications to architect scalable solutions.
                    </p>
                  </div>
                </SlideUp>

                <SlideUp delay={0.2}>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-green-500" />
                      <h2 className="text-xl font-semibold">My Journey</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      My journey into the world of development began in 2023,
                      where I discovered my passion for both code and design.
                      What started as a curiosity evolved into a career that has
                      allowed me to work with diverse clients and projects.
                    </p>
                    <p className="text-muted-foreground">
                      From developing e-commerce platforms to designing
                      intuitive dashboards, I've had the opportunity to tackle
                      complex challenges and grow both technically and
                      creatively. Each project has contributed to my holistic
                      understanding of what makes digital products successful.
                    </p>
                  </div>
                </SlideUp>
              </div>
            </div>

            <Separator className="my-12" />

            {/* Education & Certifications */}
            <div className="mb-16">
              <FadeIn className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-purple-500" />
                  <h2 className="text-2xl font-bold">
                    Education & Certifications
                  </h2>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    Education
                  </h3>
                  <StaggeredContainer>
                    {education.map((item, index) => (
                      <StaggeredItem key={index}>
                        <Card className="mb-4">
                          <CardContent className="pt-6">
                            <h4 className="font-semibold">{item.degree}</h4>
                            <div className="flex justify-between items-center text-sm mb-2">
                              <span>{item.institution}</span>
                              <span className="text-muted-foreground">
                                {item.year}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </StaggeredItem>
                    ))}
                  </StaggeredContainer>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    Certifications & Achievements
                  </h3>
                  <StaggeredContainer>
                    {certifications.map((cert, index) => (
                      <StaggeredItem key={index}>
                        <Card className="mb-4">
                          <CardContent className="pt-6">
                            <h4 className="font-semibold">{cert.name}</h4>
                            <div className="flex justify-between items-center text-sm">
                              <span>{cert.issuer}</span>
                              <span className="text-muted-foreground">
                                {cert.year}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </StaggeredItem>
                    ))}
                  </StaggeredContainer>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      Notable Achievements
                    </h3>
                    <ul className="space-y-2">
                      {achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start gap-2"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                          <a
                            href={achievement.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 hover:underline"
                          >
                            {achievement.title}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-muted p-8 rounded-lg text-center">
              <SlideUp>
                <h3 className="text-2xl font-bold mb-4">
                  Interested in working with me?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                >
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
