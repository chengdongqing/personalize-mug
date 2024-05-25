import { DependencyList, RefObject, useLayoutEffect, useState } from 'react'

export default function useElementSize(
  elRef: RefObject<HTMLElement | null>,
  deps?: DependencyList | undefined
) {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  function getSize() {
    if (!elRef.current) {
      return
    }

    const rect = elRef.current.getBoundingClientRect()
    setSize({
      width: rect.width,
      height: rect.height
    })
  }

  useLayoutEffect(() => {
    setTimeout(getSize, 1000)
    window.addEventListener('resize', getSize)

    return () => {
      window.removeEventListener('resize', getSize)
    }
  }, deps)

  return size
}
