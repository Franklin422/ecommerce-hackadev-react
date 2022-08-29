import React from 'react'
import './productDetails.css';
import Product1 from '../../assets/img/product1.png';

const ProductDetails = () => {
  return (
    <div className="main">
      <img src={Product1} className="model" alt='Imagem'/>
      <div>
        <h2>VESTIDO TRANSPACE BOW</h2>
        <div className="value">
          <h3>R$ 199,90</h3>
          <p> em até 3x R$ 66,63</p>
        </div>
        <p className="choice">Escolha o tamanho</p>
        <div className="number">
          <div className="size">P</div>
          <div className="size">M</div>
          <div className="size">G</div>
        </div>
        <button className="button">
          <p>Adicionar à Sacola</p>
        </button>

        <div className="dsc">
          <h3> DETALHES DO PRODUTO</h3>
          <p>Vestido verde florido com manga curta.</p>
          <p>Vestido super confortavél e fresquinho.</p>
        </div>
      </div>
    </div>

  )
}

export default ProductDetails;