import React from "react";
import "./style.css";

import Category1 from "../../assets/img/category1.png";
import Category2 from "../../assets/img/category2.png";
import Category3 from "../../assets/img/category3.png";
import CardCategories from "../home/homeComponents/CardCategories";

import Product1 from "../../assets/img/product1.png";
import Product2 from "../../assets/img/ind.jpeg";
import Product3 from "../../assets/img/product-2.jpg";
import Product4 from "../../assets/img/product3.png";
import Product5 from "../../assets/img/product-5.jpg";
import Product6 from "../../assets/img/product5.png";
import Product7 from "../../assets/img/product6.png";
import Product8 from "../../assets/img/product7.png";
import Banner2 from "./homeComponents/Banner2";

import Products from "./homeComponents/Products";

const Home = () => {
  const categories = [
    {id: 1 , name: "ROUPAS", image: Category1},
    {id: 2 , name: "ACESSÓRIOS", image: Category2},
    {id: 3 , name: "CALÇADOS", image: Category3},
  ]

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
  ];

  const queridinhos = [
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
  ];

  return (
    <>
      <section className="section category">
        <div className="cat-center">
        {
          categories.map((category) =>
          <CardCategories key={category.id} name={category.name} image={category.image}/>  
          )
        }
        </div>
      </section>

      <section className="section new-arrival">
        <div className="title">
          <h1>Destaques</h1>
          <p> Aqui você encontra as melhores ofertas!</p>
        </div>
        <div className="product-center">
        {products.map((product) => (
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

      <section className="section banner2">
        <Banner2 />
      </section>

      <section className="section new-arrival">
        <div className="title">
          <h1>Os queridinhos do momento</h1>
          <p>Peças exclusivas com qualidade e preço.</p>
        </div>
        <div className="product-center">
          {queridinhos.map((product) => (
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
    </>
  );
};

export default Home;
