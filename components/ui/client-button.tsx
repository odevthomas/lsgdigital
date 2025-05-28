"use client"

import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a"
  href?: string
}

const ClientButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as = "button", href, children, className = "", onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (as === "a" && href?.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: "smooth" })
      }
      onClick?.(e)
    }

    if (as === "a") {
      return (
        <a
          href={href}
          className={`inline-flex items-center justify-center px-4 py-2 cursor-pointer ${className}`}
          onClick={handleClick}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center px-4 py-2 cursor-pointer ${className}`}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)

ClientButton.displayName = "ClientButton"

export { ClientButton }
