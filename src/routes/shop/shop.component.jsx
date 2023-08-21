// import SHOP_DATA from "../../shop-data.json";
import { ProductsContext } from "../../contexts/products.contexts";
import { useContext } from "react";
import ProductCArd from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="procucts-container">
      {products.map((product) => (
        <ProductCArd key={product} product={product} />
      ))}
    </div>
  );
};

export default Shop;
