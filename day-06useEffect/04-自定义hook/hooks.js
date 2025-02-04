import { useEffect, useState } from 'react'
// 自定义的hook  要求：命名必须： useXxx
export function useMouse() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })
  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      })
    }
    document.addEventListener('mousemove', move)
    return function () {
      document.removeEventListener('mousemove', move)
    }
  }, [])
  // 自定义hook不用返回数组，可以直接返回一个值就行，也不用把setPosition返回，因为在这个自定义hooks中方法就在这里调用好了，不用返回出去
  return position
}

export function useScroll() {
  // useState提供状态
  const [scroll, setScroll] = useState({
    scrollLeft: 0,
    scrollTop: 0,
  })
  useEffect(() => {
    const scrollFn = () => {
      setScroll({
        scrollLeft: window.pageXOffset,
        scrollTop: window.pageYOffset,
      })
    }
    // 注册
    window.addEventListener('scroll', scrollFn)
    // 清理副作用
    return () => {
      window.removeEventListener('scroll', scrollFn)
    }
  }, [])
  return scroll
}
