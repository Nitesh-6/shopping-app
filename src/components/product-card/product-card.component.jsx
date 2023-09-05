import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCArd = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemsToCart } = useContext(cartContext);

  const addproductsToCart = () => {
    addItemsToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttontype="inverted" onClick={addproductsToCart}>
        Add
      </Button>
    </div>
  );
};

export default ProductCArd;
