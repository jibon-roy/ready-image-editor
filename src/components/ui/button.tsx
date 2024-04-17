import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center font-semibold justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary font-semibold text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive font-semibold text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input font-semibold bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary font-semibold text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent font-semibold hover:text-accent-foreground",
        link: "text-primary font-semibold underline-offset-4 hover:underline",
        rounded: 'bg-primary font-semibold text-primary-foreground hover:bg-primary/80 rounded-full'
      },
      size: {
        default: "px-4 py-2",
        md: "px-6 py-[0.6rem]",
        sm: "rounded-md px-3",
        lg: "rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
