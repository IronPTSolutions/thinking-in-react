import React from 'react'

const setColor = stocked => !stocked && 'out-of-stock'

const ProductRow = ({ name, price, stocked }) => (
  <tr className={`${setColor(stocked)}`}>
    <td>{name}</td>
    <td>{price}</td>
  </tr>
)

export default ProductRow
