import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (isCoarsePointer || prefersReducedMotion) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let rafId

    const handleMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    const handleOver = (event) => {
      const isInteractive = event.target.closest('a, button, input, textarea')
      ringRef.current?.classList.toggle('scale-150', Boolean(isInteractive))
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary md:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 transition-transform duration-200 ease-out md:block"
      />
    </>
  )
}
