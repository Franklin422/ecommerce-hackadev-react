import React from 'react'

const ListOrder = () => {
  return (
    <form>
    <select>
      <option value="Standart">Standart</option>
      <option value="Price">Price</option>
      <option value="Discount">Discount</option>
    </select>
    <span><i className="bx bx-chevron-down"></i></span>
  </form>
  )
}

export default ListOrder;