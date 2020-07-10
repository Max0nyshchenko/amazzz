const { default: Axios } = require("axios");
const {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} = require("../constants/cartConstants");

const addToCart = (productId, qty) => async (dispatch) => {
  try {
    const { data } = await Axios.get("/api/products/" + productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data.id,
        name: data.name,
        image: data.img,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
  } catch (error) {}
};

const removeFromCart = (productId) => (dispatch) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
};

export { addToCart, removeFromCart };
