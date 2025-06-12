import * as React from "react"

export const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    let base =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
    let variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-foreground hover:bg-secondary/80",
      ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
      outline: "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
    }
    let sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }
    return (
      <Comp
        ref={ref}
        className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
