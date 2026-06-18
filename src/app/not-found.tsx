"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp } from "@/components/motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container px-4 text-center">
        <FadeIn>
          <h1 className="text-6xl md:text-9xl font-bold mb-2">404</h1>
        </FadeIn>
        <SlideUp delay={0.1}>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
        </SlideUp>
        <SlideUp delay={0.2}>
          <Button
            asChild
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
          >
            <Link href="/">Return Home</Link>
          </Button>
        </SlideUp>
      </div>
    </div>
  );
};

export default NotFound;
