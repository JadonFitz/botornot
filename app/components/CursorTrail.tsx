'use client'

import { useEffect, useRef } from 'react'

// Subtle amber trail following the cursor. Mouse pointers only; skipped for
// touch devices and reduced-motion preferences.
export default function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
    }
    resize()
    window.addEventListener('resize', resize)

    interface Particle {
      x: number
      y: number
      life: number
    }
    const particles: Particle[] = []

    // Same silhouette as the CSS cursor (hotspot at 3,1), so the trail reads
    // as fading afterimages of the arrow itself.
    const arrow = new Path2D('M3 1 L3 22 L8.5 17 L12 26 L15.8 24.3 L12.2 15.6 L19.5 15.2 Z')

    let lastX = -100
    let lastY = -100
    const onMove = (e: PointerEvent) => {
      // Space stamps out so fast moves leave a streak, not a smear
      if (Math.hypot(e.clientX - lastX, e.clientY - lastY) < 6) return
      lastX = e.clientX
      lastY = e.clientY
      particles.push({ x: e.clientX, y: e.clientY, life: 1 })
      if (particles.length > 24) particles.shift()
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.life -= 0.055
        if (p.life <= 0) continue
        ctx.save()
        // Align the ghost under the real cursor: pointer coords = hotspot (3,1)
        ctx.setTransform(dpr, 0, 0, dpr, (p.x - 3) * dpr, (p.y - 1) * dpr)
        ctx.shadowColor = 'rgba(232, 134, 43, 0.9)'
        ctx.shadowBlur = 10 * p.life
        ctx.fillStyle = `rgba(245, 190, 99, ${0.22 * p.life * p.life})`
        ctx.fill(arrow)
        ctx.restore()
      }
      while (particles.length && particles[0].life <= 0) particles.shift()
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
    />
  )
}
