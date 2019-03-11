import { useState } from 'react'

export const inputHook = () => {
  const [search, setSearch] = useState('')
  const handleSearch = str => setSearch(str)
  return { search, handleSearch }
}

export const checkboxHook = () => {
  const [searchStock, setSearchStock] = useState(false)
  const handleCheckbox = stock => setSearchStock(stock)
  return { searchStock, handleCheckbox }
}
