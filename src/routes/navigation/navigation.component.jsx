import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { UserContext } from "../../contexts/user.contest";
import { cartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../util/firebase/firebase.util";
import crownLogo from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.conponent";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(cartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={crownLogo} alt="Crown Logo" className="logo" />
        </LogoContainer>
        <NavLinks>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
