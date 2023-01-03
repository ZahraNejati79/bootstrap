const checkInCart = (cart, product) => {
  return cart.find((pro) => pro.id === product.id);
};
export default checkInCart;
