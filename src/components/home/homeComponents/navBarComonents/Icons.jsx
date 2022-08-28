import React from 'react'

const Icons = () => {
  return (
    <div className="icons d-flex">
    <a href="/login" className="icon">
      <i className="bx bx-user"></i>
    </a>
    <div className="icon">
      <i className="bx bx-search"></i>
    </div>
    <a href="/cart" className="icon">
      <i className="bx bx-shopping-bag"></i>
      <span className="d-flex">0</span>
    </a>
  </div>
  )
}

export default Icons;
