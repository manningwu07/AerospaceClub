import { useState, useEffect } from 'react'

export const useScroll = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScroll(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scroll
}
