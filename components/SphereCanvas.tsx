'use client'

import { useEffect, useRef } from 'react'

export default function SphereCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const R = 130, N = 260
    let rot = 0
    let rafId: number

    type Dot = { ox: number; oy: number; oz: number }
    let dots: Dot[] = []

    function resize() {
      canvas!.width = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
      buildDots()
    }

    function buildDots() {
      dots = []
      for (let i = 0; i < N; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / N)
        const theta = Math.PI * (1 + Math.sqrt(5)) * i
        dots.push({
          ox: Math.sin(phi) * Math.cos(theta),
          oy: Math.cos(phi),
          oz: Math.sin(phi) * Math.sin(theta),
        })
      }
    }

    function frame() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      rot += 0.004
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const cos = Math.cos(rot)
      const sin = Math.sin(rot)

      dots.forEach((d) => {
        const x = d.ox * cos - d.oz * sin
        const z = d.ox * sin + d.oz * cos
        const y = d.oy
        const scale = (z + 1.4) / 2.4
        const t = (z + 1) / 2
        const r = Math.round(220 + (245 - 220) * t)
        const g = Math.round(100 + (180 - 100) * t)
        const b = Math.round(10 + (60 - 10) * t)
        ctx.beginPath()
        ctx.arc(cx + x * R, cy - y * R, scale * 2.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${scale * 0.85})`
        ctx.fill()
      })
      rafId = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    frame()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
