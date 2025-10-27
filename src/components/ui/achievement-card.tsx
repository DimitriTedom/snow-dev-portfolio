import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface Achievement {
  id: string;
  title: string;
  description?: string;
  url: string;
  provider: string;
  date: string;
  category?: string;
  duration?: string;
  imageUrl?: string; // Optional direct image URL
}

interface AchievementCardProps {
  achievement: Achievement;
  className?: string;
  showPreview?: boolean;
}

// Hook to fetch preview image from URL
const usePreviewImage = (url: string, enabled: boolean = true) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!enabled || !url) {
      setLoading(false);
      return;
    }

    // Function to extract preview image from meta tags
    const fetchPreviewImage = async () => {
      try {
        // For common platforms, we can use their API endpoints or known patterns
        if (url.includes('udemy.com')) {
          // For Udemy certificates, use a placeholder or try to extract from URL
          setPreviewImage('/achievements/udemy-certificate.png');
        } else if (url.includes('canva.com')) {
          // For Canva, try to extract the design ID and use Canva's preview API
          const designIdMatch = url.match(/design\/([A-Za-z0-9_-]+)/);
          if (designIdMatch) {
            setPreviewImage('/achievements/canva-badge.png');
          }
        } else if (url.includes('aws.amazon.com')) {
          setPreviewImage('/achievements/aws-certificate.png');
        } else {
          // Generic preview - you could implement a more sophisticated solution
          // using a service like Urlbox, or puppeteer server-side
          setPreviewImage('/achievements/default-certificate.png');
        }
      } catch (error) {
        console.error('Error fetching preview image:', error);
        setPreviewImage('/achievements/default-achievement.png');
      } finally {
        setLoading(false);
      }
    };

    fetchPreviewImage();
  }, [url, enabled]);

  return { previewImage, loading };
};

export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  className,
  showPreview = true,
}) => {
  const { previewImage, loading } = usePreviewImage(achievement.url, showPreview);
  const [imageError, setImageError] = useState(false);

  // Fallback image URL
  const fallbackImage = achievement.imageUrl || '/achievements/default-achievement.png';
  const displayImage = previewImage || fallbackImage;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn("group", className)}
    >
      <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-background/50">
        {showPreview && (
          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
            {!loading && (
              <img
                src={imageError ? fallbackImage : displayImage}
                alt={`${achievement.title} preview`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            )}
            
            {loading && (
              <div className="w-full h-full flex items-center justify-center bg-muted animate-pulse">
                <Award className="h-12 w-12 text-muted-foreground/50" />
              </div>
            )}
            
            {/* Provider badge */}
            <div className="absolute top-3 right-3">
              <Badge 
                variant="secondary" 
                className="bg-background/90 backdrop-blur-sm shadow-sm"
              >
                {achievement.provider}
              </Badge>
            </div>
            
            {/* Category badge */}
            {achievement.category && (
              <div className="absolute top-3 left-3">
                <Badge 
                  variant="outline" 
                  className="bg-primary/90 text-primary-foreground border-primary"
                >
                  {achievement.category}
                </Badge>
              </div>
            )}
          </div>
        )}

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{achievement.date}</span>
            </div>
            {achievement.duration && (
              <Badge variant="outline" className="text-xs">
                {achievement.duration}
              </Badge>
            )}
          </div>
          
          <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
            {achievement.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          {achievement.description && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {achievement.description}
            </p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span className="truncate max-w-32">{achievement.provider}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="group/btn"
              asChild
            >
              <a
                href={achievement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="hidden sm:inline">View</span>
                <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Grid container component for achievements
interface AchievementGridProps {
  achievements: Achievement[];
  className?: string;
  showPreview?: boolean;
}

export const AchievementGrid: React.FC<AchievementGridProps> = ({
  achievements,
  className,
  showPreview = true,
}) => {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      className
    )}>
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <AchievementCard
            achievement={achievement}
            showPreview={showPreview}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementCard;