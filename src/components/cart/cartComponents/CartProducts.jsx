import RemoveProducts from "./RemoveProducts";

const CartProducts = ({ image, description, price, subtotal }) => {
  return (
    <tr>
      <td>
        <div className="cart-info">
          <img src={image} alt="Vestido verde florido" />
          <div>
            <p>{description}</p>
            <span> Preço: R$ {price},00 </span> <br />
            <RemoveProducts />
          </div>
        </div>
      </td>

    <td> <input type="number" value="1" min="1" /> </td>
    <td> {subtotal} </td>

    </tr>
  );
};

export default CartProducts;