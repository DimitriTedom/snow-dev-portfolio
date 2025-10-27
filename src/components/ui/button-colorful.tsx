import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant?: "default" | "orange";
    asChild?: boolean;
    children?: React.ReactNode;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    variant = "default",
    asChild,
    children,
    ...props
}: ButtonColorfulProps) {
    // If asChild, we need to render the child element with our styling
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            ...children.props,
            className: cn(
                "relative h-10 px-4 overflow-hidden inline-flex items-center justify-center",
                "whitespace-nowrap rounded-md text-sm font-medium ring-offset-background",
                "transition-colors focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variant === "orange" 
                    ? "bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400"
                    : "bg-zinc-900 dark:bg-zinc-100",
                "transition-all duration-200",
                "group",
                className,
                children.props.className
            ),
            children: (
                <>
                    {/* Gradient background effect */}
                    <div
                        className={cn(
                            "absolute inset-0",
                            variant === "orange"
                                ? "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"
                                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                            "opacity-40 group-hover:opacity-80",
                            "blur transition-opacity duration-500"
                        )}
                    />
                    {/* Content */}
                    <div className="relative flex items-center justify-center gap-2">
                        <span className={cn(
                            variant === "orange" 
                                ? "text-white dark:text-white" 
                                : "text-white dark:text-zinc-900"
                        )}>
                            {children.props.children}
                        </span>
                        <ArrowUpRight className={cn(
                            "w-3.5 h-3.5",
                            variant === "orange" 
                                ? "text-white/90 dark:text-white/90" 
                                : "text-white/90 dark:text-zinc-900/90"
                        )} />
                    </div>
                </>
            )
        });
    }
    
    return (
        <button
            className={cn(
                "relative h-10 px-4 overflow-hidden inline-flex items-center justify-center",
                "whitespace-nowrap rounded-md text-sm font-medium ring-offset-background",
                "transition-colors focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variant === "orange" 
                    ? "bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400"
                    : "bg-zinc-900 dark:bg-zinc-100",
                "transition-all duration-200",
                "group",
                className
            )}
            {...props}
        >
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    variant === "orange"
                        ? "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"
                        : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                    "opacity-40 group-hover:opacity-80",
                    "blur transition-opacity duration-500"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className={cn(
                    variant === "orange" 
                        ? "text-white dark:text-white" 
                        : "text-white dark:text-zinc-900"
                )}>
                    {label}
                </span>
                <ArrowUpRight className={cn(
                    "w-3.5 h-3.5",
                    variant === "orange" 
                        ? "text-white/90 dark:text-white/90" 
                        : "text-white/90 dark:text-zinc-900/90"
                )} />
            </div>
        </button>
    );
}