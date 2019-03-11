import React from 'react'
import SearchBar from '../ui/SearchBar'
import ProductTable from './ProductTable'
import data from '../data/data.json'
import { getData } from '../selectors/data.selector'

import { inputHook, checkboxHook } from '../hooks/inputHooks'
import { initHook } from '../hooks/initHooks'
import { stockedListHook, filterListHook } from '../hooks/listHooks'

const FilterableProductTable = () => {
  const { search, handleSearch } = inputHook()
  const { searchStock, handleCheckbox } = checkboxHook()
  const { list } = initHook(getData(data))
  const { listStocked } = stockedListHook(list, searchStock)
  const { filterList } = filterListHook(search, listStocked)

  return (
    <div>
      <header className="center">
        <h1>IronStore</h1>
      </header>
      <SearchBar
        search={search}
        setSearch={handleSearch}
        setSearchStock={handleCheckbox}
      />
      <ProductTable filterList={filterList} />
    </div>
  )
}

export default FilterableProductTable
