import React from 'react'
import ProductRow from '../ui/ProductRow'

const ProductTable = ({ filterList }) => (
  <table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      {filterList.map(item => (
        <ProductRow {...item} />
      ))}
    </tbody>
  </table>
)

export default ProductTable
