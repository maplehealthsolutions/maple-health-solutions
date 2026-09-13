import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        active: "bg-fern text-green",
        urgent: "bg-blush text-terra",
        info: "bg-steel text-navy",
        tag: "bg-sage text-[#5A6B5E]",
      },
    },
    defaultVariants: {
      variant: "tag",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
