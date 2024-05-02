import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        danger:
          "border-transparent bg-danger-100 text-danger-500 hover:bg-danger-100/80",
        success:
          "hover:bg-success-100/80 border-transparent bg-success-50 text-success-700",
        ternary:
          "border-transparent bg-ternary-100 text-ternary-900 hover:bg-ternary-100/80",
        orange:
          "border-transparent bg-orange-100 text-orange-500 hover:bg-orange-100/80",
        warning: "border-transparent bg-[#FFFEEA] text-[#FFBA00]",
        light:
          "border-transparent bg-ternary-100 text-foreground hover:bg-ternary-100/80",
        success_light:
          "border-transparent bg-success-50 text-success-700 hover:bg-success-50/80",
        destructive_light:
          "border-transparent bg-red-50 text-destructive hover:bg-red-50/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
