import Layout from "@/components/layout";
import { FadeIn, StaggeredContainer, StaggeredItem } from "@/components/motion";
import { AchievementGrid } from "@/components/ui/achievement-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { achievementsData, getAchievementCategories, getAchievementsByCategory } from "@/data/achievements";
import { Award, Trophy, Star, Target } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = getAchievementCategories();
  const filteredAchievements = getAchievementsByCategory(activeCategory);

  const stats = [
    {
      icon: Trophy,
      label: "Total Achievements",
      value: achievementsData.length,
      color: "text-yellow-500"
    },
    {
      icon: Star,
      label: "Certifications",
      value: achievementsData.filter(a => a.category?.includes("Development") || a.category?.includes("Design")).length,
      color: "text-orange-500"
    },
    {
      icon: Target,
      label: "In Progress",
      value: achievementsData.filter(a => a.title.includes("Progress") || a.date.includes("Target")).length,
      color: "text-orange-500"
    },
    {
      icon: Award,
      label: "Competitions Won",
      value: achievementsData.filter(a => a.category === "Competition").length,
      color: "text-orange-500"
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <FadeIn className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <span className="text-sm text-yellow-500 font-medium tracking-wider uppercase">
                Achievements & Certifications
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Notable Achievements
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my professional certifications, awards, and milestone achievements 
              that showcase my commitment to continuous learning and excellence.
            </p>
          </FadeIn>

          {/* Stats Grid */}
          <StaggeredContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <StaggeredItem key={stat.label}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-lg p-6 border shadow-sm text-center"
                >
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>

          {/* Category Filters */}
          <FadeIn className="mb-12">
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-auto p-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="text-xs md:text-sm px-2 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </FadeIn>

          {/* Results Count */}
          <FadeIn className="mb-8">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredAchievements.length} achievement{filteredAchievements.length !== 1 ? 's' : ''} 
                {activeCategory !== "All" && ` in ${activeCategory}`}
              </p>
              {activeCategory !== "All" && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveCategory("All")}
                >
                  Show All
                </Button>
              )}
            </div>
          </FadeIn>

          {/* Achievements Grid */}
          {filteredAchievements.length > 0 ? (
            <AchievementGrid 
              achievements={filteredAchievements}
              className="mb-16"
            />
          ) : (
            <FadeIn className="text-center py-16">
              <Award className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="text-xl font-medium mb-2">No achievements found</h3>
              <p className="text-muted-foreground mb-4">
                No achievements match the selected category.
              </p>
              <Button
                variant="outline"
                onClick={() => setActiveCategory("All")}
              >
                Show All Achievements
              </Button>
            </FadeIn>
          )}

          {/* Call to Action */}
          <FadeIn className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Always Learning, Always Growing
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These achievements represent my commitment to continuous improvement and staying 
                current with the latest technologies and industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/contact">Let's Work Together</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/projects">View My Projects</a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;