import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);
  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item, idx) => {
              return (
                <li key={idx}>
                  {console.log(item)}
                  <div className="cart-image">
                    <img src={item.image} alt="product" />
                  </div>
                  <div className="cart-name">
                    <div>
                      <Link to={"/product/" + item.product}>{item.name}</Link>
                    </div>
                    <div>
                      Qty:
                      <select
                        value={item.qty}
                        onChange={(e) => {
                          console.log(item.product, "value:", e.target.value);
                          console.log(addToCart(item.product, e.target.value));
                          dispatch(addToCart(item.product, e.target.value));
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x) => {
                          return (
                            <option key={x + 1} value={x + 1}>
                              {" "}
                              {x + 1}{" "}
                            </option>
                          );
                        })}
                      </select>
                      <button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                        className="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="cart-price">${item.price}</div>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ({" "}
          {cartItems.reduce((a, c) => {
            return a + c.qty;
          }, 0)}{" "}
          items) : ${" "}
          {cartItems.reduce((a, c) => {
            return a + c.price * c.qty;
          }, 0)}
        </h3>
        <button
          onClick={checkoutHandler}
          className="button primary full-width"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
