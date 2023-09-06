import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCArd = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemsToCart } = useContext(cartContext);

  const addproductsToCart = () => {
    addItemsToCart(product);
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <  Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttontype={BUTTON_TYPE_CLASSES.inverted} onClick={addproductsToCart}>
        Add
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCArd;
