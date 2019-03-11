import React, { Component } from 'react'
import SearchBar from '../ui/SearchBar'
import ProductTable from './ProductTable'
import data from '../data/data.json'
import { getData } from '../selectors/data.selector'

class FilterableProductTable extends Component {
  state = {
    list: [],
    searchStock: false,
    search: '',
    listStocked: [],
    filterList: []
  }

  componentDidMount() {
    this.setState({ list: getData(data) })
  }

  handleCheckbox = stock => this.setState({ searchStock: stock })
  handleSearch = search => this.setState({ search })

  getStockedList = () =>
    this.state.list.filter(item =>
      this.state.searchStock ? item.stocked : true
    )
  getFilteredList = list =>
    list.filter(item =>
      item.name.toLowerCase().includes(this.state.search.toLowerCase())
    )

  getResultList = () => this.getFilteredList(this.getStockedList())

  render() {
    const { search } = this.state
    return (
      <div>
        <header className="center">
          <h1>IronStore</h1>
        </header>
        <SearchBar
          search={search}
          setSearch={this.handleSearch}
          setSearchStock={this.handleCheckbox}
        />
        <ProductTable filterList={this.getResultList()} />
      </div>
    )
  }
}

export default FilterableProductTable
