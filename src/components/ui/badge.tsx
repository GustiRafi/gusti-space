import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        tech: "border-border/50 bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105",
        nuxt: "border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-200 hover:scale-105",
        vue: "border-transparent bg-green-100 text-green-700 hover:bg-green-200 hover:scale-105",
        laravel: "border-transparent bg-red-100 text-red-700 hover:bg-red-200 hover:scale-105",
        tailwind: "border-transparent bg-cyan-100 text-cyan-700 hover:bg-cyan-200 hover:scale-105",
        react: "border-transparent bg-sky-100 text-sky-700 hover:bg-sky-200 hover:scale-105",
        typescript: "border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200 hover:scale-105",
        nodejs: "border-transparent bg-lime-100 text-lime-700 hover:bg-lime-200 hover:scale-105",
        postgresql: "border-transparent bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
