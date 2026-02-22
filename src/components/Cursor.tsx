import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const isCoarse = typeof window !== 'undefined' && (
    ('matchMedia' in window && (window.matchMedia('(hover: none)').matches || window.matchMedia('(pointer: coarse)').matches)) ||
    ('ontouchstart' in window) ||
    (typeof navigator !== 'undefined' && (navigator.maxTouchPoints || 0) > 0)
  )
  if (isCoarse) return null

  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`
        ringRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [data-hover], input, textarea')
      setIsHovering(!!isInteractive)
    }

    const handleDown = () => setIsClicking(true)
    const handleUp = () => setIsClicking(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [])

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="custom-cursor fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          width: isClicking ? '6px' : '8px',
          height: isClicking ? '6px' : '8px',
          background: isHovering
            ? 'radial-gradient(circle, #a78bfa, #60a5fa)'
            : 'radial-gradient(circle, #60a5fa, #3b82f6)',
          borderRadius: '50%',
          boxShadow: '0 0 12px rgba(96,165,250,0.8)',
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="custom-cursor fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHovering ? '48px' : isClicking ? '24px' : '36px',
          height: isHovering ? '48px' : isClicking ? '24px' : '36px',
          border: isHovering
            ? '1.5px solid rgba(167,139,250,0.8)'
            : '1.5px solid rgba(96,165,250,0.5)',
          borderRadius: '50%',
          boxShadow: isHovering ? '0 0 20px rgba(139,92,246,0.3)' : 'none',
          transition: 'width 200ms ease, height 200ms ease, border 200ms ease, box-shadow 200ms ease',
        }}
      />
    </>
  )
}
