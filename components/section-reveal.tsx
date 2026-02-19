"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

function useInView(rootMargin = "0px 0px -80px 0px") {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return { ref, isVisible }
}

const EASE_OUT_EXPO = "cubic-bezier(0.16, 1, 0.3, 1)"
const EASE_OUT_QUART = "cubic-bezier(0.25, 1, 0.5, 1)"

export function SectionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  blur = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  blur?: boolean
}) {
  const { ref, isVisible } = useInView()

  const translate = {
    up: "translateY(32px)",
    down: "translateY(-32px)",
    left: "translateX(40px)",
    right: "translateX(-40px)",
    none: "none",
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : `${translate[direction]} scale(0.98)`,
        filter: blur ? (isVisible ? "blur(0px)" : "blur(4px)") : undefined,
        transition: [
          `opacity 0.8s ${EASE_OUT_EXPO} ${delay}ms`,
          `transform 0.8s ${EASE_OUT_EXPO} ${delay}ms`,
          blur ? `filter 0.8s ${EASE_OUT_EXPO} ${delay}ms` : "",
        ]
          .filter(Boolean)
          .join(", "),
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}

export function HeroReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50 + delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
        filter: isVisible ? "blur(0px)" : "blur(3px)",
        transition: [
          `opacity 0.9s ${EASE_OUT_QUART} ${delay}ms`,
          `transform 0.9s ${EASE_OUT_QUART} ${delay}ms`,
          `filter 0.9s ${EASE_OUT_QUART} ${delay}ms`,
        ].join(", "),
        willChange: isVisible ? "auto" : "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  )
}

export function StaggerReveal({
  children,
  className,
  staggerMs = 80,
  direction = "up",
}: {
  children: ReactNode[]
  className?: string
  staggerMs?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}) {
  const { ref, isVisible } = useInView()

  const translate = {
    up: "translateY(32px)",
    down: "translateY(-32px)",
    left: "translateX(40px)",
    right: "translateX(-40px)",
    none: "none",
  }

  return (
    <div ref={ref} className={cn(className)}>
      {children.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : `${translate[direction]} scale(0.98)`,
            transition: [
              `opacity 0.7s ${EASE_OUT_EXPO} ${i * staggerMs}ms`,
              `transform 0.7s ${EASE_OUT_EXPO} ${i * staggerMs}ms`,
            ].join(", "),
            willChange: isVisible ? "auto" : "opacity, transform",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
