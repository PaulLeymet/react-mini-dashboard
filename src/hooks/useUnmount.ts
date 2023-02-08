import { useEffect, useRef } from 'react'

export const useUnmount = (callback: () => void) => {
  const componentWillUnmount = useRef(false)
  // This is componentWillUnmount
  useEffect(() => {
    return () => {
      componentWillUnmount.current = true
    }
  }, [])

  useEffect(() => {
    return () => {
      // This line only evaluates to true after the componentWillUnmount happens
      if (componentWillUnmount.current) {
        callback()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
