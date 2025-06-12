import * as React from "react"

export function Avatar({ className = "", children, ...props }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-muted ${className}`} {...props}>
      {children}
    </span>
  )
}

export function AvatarImage({ src, alt, className = "", ...props }) {
  return (
    <img src={src} alt={alt} className={`object-cover rounded-full ${className}`} {...props} />
  )
}

export function AvatarFallback({ children, className = "", ...props }) {
  return (
    <span className={`rounded-full bg-muted text-muted-foreground ${className}`} {...props}>
      {children}
    </span>
  )
}