import { createContext, useState, useEffect } from "react";

const addCartItems = (cartItems, productsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productsToAdd, quantity: 1 }];
};

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartItems = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartItems);
  }, [cartItems]);

  const addItemsToCart = (productsToAdd) => {
    setCartItems(addCartItems(cartItems, productsToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    cartItems,
    cartCount,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
