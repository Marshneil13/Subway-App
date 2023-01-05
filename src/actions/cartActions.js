export const addToCart = (subway, varient, quantity) => (dispatch) => {
  var cartItem = {
    name: subway.name,
    _id: subway._id,
    image: subway.image,
    varient: varient,
    quantity: quantity,
    prices: subway.prices,
    price: subway.prices[0][varient] * quantity,
    // price is the cost of the selected item
    // prices is the Array in which we have the price for that particular varient
    // so that we can easily change the quantity of the selected item
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItem });
};
