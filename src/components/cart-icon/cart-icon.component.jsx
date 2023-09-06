import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";
import ShoppingSvg from "../../assets/shopping-bag.svg";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(cartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon
        src={ShoppingSvg}
        alt="Shopping icon"
        className="shopping-icon"
      />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
