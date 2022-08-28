import React from 'react'
import './cart.css';

import Button from './cartComponents/Button';
import CartProducts from './cartComponents/CartProducts';
import TitleTable from './cartComponents/TitleTable';
import Total from './cartComponents/Total';

import Product1 from "../../assets/img/product1.png";
import Product5 from "../../assets/img/product5.png";
import Product8 from "../../assets/img/card8.png";
import Product2 from "../../assets/img/card2.png";

const Cart = () => {
    const products = [
      {
        image: Product1,
        description: "Vestido Verde Florido",
        price: 50,
        // quantity: 1,
        subtotal: 50,
      },
      {
        image: Product5,
        description: "Tênis Azul Marinho",
        price: 90,
        // quantity: 2,
        subtotal: 90,
      },
      {
        image: Product8,
        description: "Calça branca",
        price: 60,
        quantity: 1,
        subtotal: 60,
      },
      {
        image: Product2,
        description: "Camiseta Verde",
        price: 60,
        quantity: 1,
        subtotal: 50,
      },
    ];
  
    return (
      <div className="container cart">
        <table>
          <TitleTable/>
          {products.map((product) => (
            <CartProducts
              key={product.id}
              image={product.image}
              description={product.description}
              price={product.price}
              subtotal={product.subtotal}
            />
          ))}
        </table>
  
        <div className="total-price">
          <Total/>
          <Button/>
        </div>
      </div>
    );
}

export default Cart