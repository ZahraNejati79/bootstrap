const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (p) => p.id === action.payload.id
      );
      if (updatedCartIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = updatedCart[updatedCartIndex];
        updatedItem.quantity++;
        updatedCart[updatedCartIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    }
  }
};
export default cartReducer;
