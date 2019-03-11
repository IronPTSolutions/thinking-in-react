import { useState, useEffect } from 'react'

export const initHook = data => {
  const [list, setList] = useState([])
  useEffect(() => {
    setList(data)
  }, [])
  return { list }
}
