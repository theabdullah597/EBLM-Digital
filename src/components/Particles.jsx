import { useEffect, useRef } from 'react'

export default function Particles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    container.innerHTML = ''
    for (let i = 0; i < 45; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.cssText = `
        left:${Math.random()*100}%;
        top:${Math.random()*100}%;
        width:${2+Math.random()*3}px;
        height:${2+Math.random()*3}px;
        animation-delay:${Math.random()*10}s;
        animation-duration:${7+Math.random()*12}s;
        opacity:${0.1+Math.random()*0.4};
      `
      container.appendChild(p)
    }
  }, [])

  return <div className="particles" ref={containerRef} />
}
