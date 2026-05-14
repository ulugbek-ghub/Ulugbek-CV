import { useEffect, useRef, useState } from 'react'

export default function StarField() {
  const [isDark, setIsDark] = useState(() => document.documentElement.getAttribute('data-theme') === 'dark');
  const canvasRef = useRef(null);

  // Observe theme changes and update state
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const starsRef = useRef([])
  const mousePosRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const handleMouseMove = (e) => {
      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return
 
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = dimensions.width
    canvas.height = dimensions.height
 
    generateStars()
    animate()
    // Cleanup on dimension or theme change
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, isDark])

  const generateStars = () => {
    const stars = []
    const starCount = 150

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        layer: Math.floor(Math.random() * 3),
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      })
    }

    starsRef.current = stars
  }

  const animate = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const mouseX = mousePosRef.current.x
    const mouseY = mousePosRef.current.y

    starsRef.current.forEach(star => {
      const parallaxMultipliers = [0.03, 0.02, 0.01]
      const multiplier = parallaxMultipliers[star.layer]

      const offsetX = (mouseX - canvas.width / 2) * multiplier
      const offsetY = (mouseY - canvas.height / 2) * multiplier

      star.x += star.vx
      star.y += star.vy

      if (star.x < 0) star.x = canvas.width
      if (star.x > canvas.width) star.x = 0
      if (star.y < 0) star.y = canvas.height
      if (star.y > canvas.height) star.y = 0

      const newX = star.x + offsetX
      const newY = star.y + offsetY

      const currentTwinkle = Math.sin(Date.now() * star.twinkleSpeed + star.twinklePhase)
      const currentOpacity = star.opacity + currentTwinkle * 0.2

      ctx.beginPath()
      ctx.arc(newX, newY, star.size, 0, Math.PI * 2)
        const starColor = isDark ? 255 : 0;
        ctx.fillStyle = `rgba(${starColor}, ${starColor}, ${starColor}, ${Math.max(0, Math.min(1, currentOpacity))})`
      ctx.fill()
    })

    animationFrameRef.current = requestAnimationFrame(animate)
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: isDark ? '#000000' : '#FFFFFF',
        pointerEvents: 'none'
      }}
    />
  )
}