"use client";

import {
  FadeIn,
  StaggeredContainer,
  StaggeredItem,
} from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { projectsData } from "@/data/projects";

const categories = ["All", "Product Design", "UI/UX Design", "Web Apps"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    return activeCategory === "All" || project.category === activeCategory;
  });

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              My Portfolio Projects
            </h1>
            <p className="text-muted-foreground">
              Explore my featured works showcasing my development and design
              skills across various domains.
            </p>
          </FadeIn>

          <div className="mb-8">
            <Tabs defaultValue="All" className="mt-4">
              <TabsList className="grid grid-cols-2 md:grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {filteredProjects.length > 0 ? (
            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <StaggeredItem key={project.id}>
                  <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <Link href={`/project/${project.id}`}>
                      <div className="relative h-60 w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded">
                          {project.date}
                        </div>
                      </div>
                      <CardContent className="p-6 pb-2">
                        <div className="mb-2 flex items-center gap-2">
                          <Folder className="h-4 w-4 text-orange-500" />
                          <span className="text-sm text-muted-foreground">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 truncate">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-secondary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Link>
                    <CardContent className="p-6 pt-0 space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={project?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> View Project
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={project?.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> View Code
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          ) : (
            <div className="text-center py-20">
              <FadeIn>
                <h3 className="text-xl font-medium mb-2">No projects found</h3>
                <p className="text-muted-foreground">
                  Try selecting a different category.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setActiveCategory("All")}
                >
                  Show All Projects
                </Button>
              </FadeIn>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
