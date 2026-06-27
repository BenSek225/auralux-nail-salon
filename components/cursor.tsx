'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60 md:block"
        animate={{ x: pos.x, y: pos.y, scale: clicking ? 0.7 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22, mass: 0.6 }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold md:block"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 600, damping: 28, mass: 0.3 }}
      />
    </>
  )
}
