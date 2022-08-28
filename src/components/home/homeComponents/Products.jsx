import React from "react";

const Products = ({ name, colors, price, percent, image }) => {
  
  return (
    <div className="product-item">
      <div className="overlay">
        <a href="/" className="product-thumb">
          <img src={image} alt="" />
        </a>
        <span
          className="discount"
          style={!percent ? { display: "none" } : undefined}
        >{`${percent}%`}</span>
      </div>
      <div className="product-info">
        <span>{name}</span>
        <a href="/">{colors}</a>
        <h4
          className="priceB4"
          style={
            percent
              ? { textDecoration: "line-through", fontSize: "12px", fontWeight: "bold"}
              : undefined
          }
        >
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h4>
        <h4 style={!percent ? { display: "none" } : undefined}>
         
          {((price / 100) * percent).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h4>
      </div>
    </div>
  );
};

export default Products;
