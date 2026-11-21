import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary-300 text-white hover:bg-primary-200",
        dark: "bg-primary-400 text-white hover:bg-primary-300",
        light: "bg-white text-black hover:bg-white/90",
        ghost: "bg-white/10 text-white hover:bg-white/20",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8",
      },
      shape: {
        square: "rounded-none",
        pill: "rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md", shape: "square" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({ className, variant, size, shape, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, shape }), className)} {...props} />;
}

export { Button, buttonVariants };
