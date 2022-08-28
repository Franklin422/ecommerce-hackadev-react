import React from 'react'

const Icons = () => {
  return (
    <div className="icons d-flex">
    <a href="cadastro.html" className="icon">
      <i className="bx bx-user"></i>
    </a>
    <div className="icon">
      <i className="bx bx-search"></i>
    </div>
    <a href="carrinho.html" className="icon">
      <i className="bx bx-shopping-bag"></i>
      <span className="d-flex">0</span>
    </a>
  </div>
  )
}

export default Icons;
