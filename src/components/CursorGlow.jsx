import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const el = glowRef.current
    const move = e => {
      el.style.left = e.clientX + 'px'
      el.style.top  = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor-glow" ref={glowRef} />
}
