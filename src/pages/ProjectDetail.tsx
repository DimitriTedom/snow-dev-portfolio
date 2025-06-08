import { useParams } from "react-router-dom";
import Layout from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink, Tag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { projectsData } from "./Projects";
import { Badge } from "@/components/ui/badge.tsx";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project by id
    const foundProject = projectsData.find((p) => p.id === Number(id));

    if (foundProject) {
      setProject(foundProject);
    }

    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="pt-32 pb-20 flex justify-center">
          <div className="animate-pulse w-16 h-16 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="pt-32 pb-20 container">
          <FadeIn className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </FadeIn>
        </div>
      </Layout>
    );
  }

  // Get additional images from project data
  const additionalImages = [project.image2, project.image3].filter(Boolean); // Filter out any undefined images

  return (
    <Layout>
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-black">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="absolute inset-0 container flex flex-col justify-end pb-12 md:pb-20">
          <FadeIn>
            <Button
              variant="outline"
              size="sm"
              className="bg-black/30 backdrop-blur-sm border-white/10 text-white mb-6"
              asChild
            >
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              {project.category}
            </p>
          </FadeIn>
        </div>
      </div>

      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <SlideUp>
              <div className="prose dark:prose-invert max-w-none mb-10">
                <h2 className={"my-5 font-extrabold"}>Project Overview</h2>
                <p>{project.description}</p>

                <h2 className={"my-5 font-extrabold"}>The Challenge</h2>
                <p>{project.challenge}</p>

                <h2 className={"my-5 font-extrabold"}>The Solution</h2>
                <p>{project.solution}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                {additionalImages.map((img, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-lg ${
                      index === additionalImages.length - 1
                        ? "md:col-span-2"
                        : ""
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <h2 className={"my-5 font-extrabold"}>Results & Impact</h2>
                <p>{project.result}</p>
              </div>
            </SlideUp>
          </div>

          <div>
            <SlideUp delay={0.1}>
              <div className="bg-muted rounded-lg p-6 sticky top-24 shadow-2xl">
                <h3 className="text-xl font-semibold mb-6">Project Details</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h4 className="font-medium">Project Date</h4>
                      <p className="text-muted-foreground text-sm">
                        {project.date}
                      </p>
                    </div>
                  </div>

                  {/*<div className="flex items-start gap-3">*/}
                  {/*  <User className="h-5 w-5 text-muted-foreground mt-0.5" />*/}
                  {/*  <div>*/}
                  {/*    <h4 className="font-medium">Client</h4>*/}
                  {/*    <p className="text-muted-foreground text-sm">My Skills Concour</p>*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  <div className="flex items-start gap-3">
                    <Tag className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h4 className="font-medium">Category</h4>
                      <p className="text-muted-foreground text-sm">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <Badge
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button className="w-full" asChild>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Live Project
                      </a>
                    </Button>

                    <Button className="w-full" asChild>
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        See Github Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
