import React from 'react'

import Product1 from "../../assets/img/product1.png";
import Product2 from "../../assets/img/ind.jpeg";
import Product3 from "../../assets/img/product-2.jpg";
import Product4 from "../../assets/img/product3.png";
import Product5 from "../../assets/img/product-5.jpg";
import Product6 from "../../assets/img/product5.png";
import Product7 from "../../assets/img/product6.png";
import Product8 from "../../assets/img/product7.png";
import Product9 from "../../assets/img/product8.png";

import Products from '../home/homeComponents/Products';
import ListOrder from './productsComponents/ListOrder';

const ProductContainer = () => {

  const products = [
    {
      id: 1,
      name: "VESTIDO FEMININO COM MANGAS",
      colors: "floral/preto",
      price: 249.0,
      percent: 0,
      image: Product1,
    },
    {
      id: 2,
      name: "MOLETOM FORRADO",
      colors: "branco/azul marinho",
      price: 518.7,
      percent: 50,
      image: Product2,
    },
    {
      id: 3,
      name: "BOLSA COM ZIPPER",
      colors: "vermelha/preta",
      price: 220.0,
      percent: 0,
      image: Product3,
    },
    {
      id: 4,
      name: "CAMISA ARAMIS",
      colors: "branca/vermelha/preta",
      price: 199.9,
      percent: 50,
      image: Product4,
    },
    {
      id: 5,
      name: "MOLETOM COM CAPUZ",
      colors: "preto",
      price: 255.8,
      percent: 0,
      image: Product5,
    },
    {
      id: 6,
      name: "TÊNIS FEMININO HRX",
      colors: "cinza grafite/azul marinho",
      price: 520.5,
      percent: 0,
      image: Product6,
    },
    {
      id: 7,
      name: "VESTIDO TRANSPASSE",
      colors: "rosa chiclete",
      price: 258.9,
      percent: 50,
      image: Product7,
    },
    {
      id: 8,
      name: "TÊNIS MASCULINO SPORT",
      colors: "preto/cinza",
      price: 599.9,
      percent: 0,
      image: Product8,
    },
    {
      id: 9,
      name: "TÊNIS MASCULINO SPORT",
      colors: "preto/cinza",
      price: 599.9,
      percent: 0,
      image: Product9,
    },
  ];

  return (
    <section className="section all-products" id="products">
      <div className="top container">
        <h1>Todos os Produtos</h1>
        <ListOrder/>
      </div>
      <div className="product-center container">
        {products.map(product => (
            <Products
            key={product.id}
            name={product.name}
            colors={product.colors}
            price={product.price}
            percent={product.percent}
            image={product.image}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductContainer;