import React from "react";
import { useNavigate } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import useProducts from "../hooks/useProducts";
import ReviewItem from "../reviewItem/ReviewItem";
import useCart from "../useCart/useCart";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };
  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={() => navigate("/shipment")}>
            Proceed shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
