import { useEffect, useState } from 'react'
// 自定义的hook  要求：命名必须： useXxx
export function useMouse() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    }
    document.addEventListener('mousemove', move)
    return function () {
      document.removeEventListener('mousemove', move)
    }
  }, [])
  return position
}

export function useScroll() {
  const [scroll, setScroll] = useState({
    scrollLeft: 0,
    scrollTop: 0
  })
  useEffect(() => {
    const scrollFn = () => {
      setScroll({
        scrollLeft: window.pageXOffset,
        scrollTop: window.pageYOffset
      })
    }
    window.addEventListener('scroll', scrollFn)
    return () => {
      window.removeEventListener('scroll', scrollFn)
    }
  }, [])
  return scroll
}
