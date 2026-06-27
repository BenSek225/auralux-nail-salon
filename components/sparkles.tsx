'use client'

import { useEffect, useState } from 'react'

interface Sparkle {
  left: string
  top: string
  size: number
  delay: string
  duration: string
}

export function Sparkles({ count = 28 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    setSparkles(
      Array.from({ length: count }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1.5,
        delay: `${Math.random() * 4}s`,
        duration: `${Math.random() * 3 + 3}s`,
      })),
    )
  }, [count])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="sparkle absolute rounded-full bg-gold"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: s.delay,
            animationDuration: s.duration,
            boxShadow: '0 0 6px 1px rgba(201, 168, 76, 0.7)',
          }}
        />
      ))}
    </div>
  )
}
