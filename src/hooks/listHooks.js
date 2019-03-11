import { useState, useEffect } from 'react'

export const stockedListHook = (list, searchStock) => {
  const [listStocked, setListStocked] = useState([])
  useEffect(() => {
    setListStocked(list.filter(item => (searchStock ? item.stocked : true)))
  }, [list, searchStock])
  return { listStocked }
}

export const filterListHook = (search, listStocked) => {
  const [filterList, setFilterList] = useState([])
  useEffect(() => {
    setFilterList(
      listStocked.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, listStocked])
  return { filterList }
}
