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

      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice,
      };
    }
    case "DECREMENT_CART_ITEM": {
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (P) => P.id === action.payload.id
      );
      const updatedCartItem = updatedCart[updatedCartIndex];
      if (updatedCartItem.quantity > 1) {
        updatedCartItem.quantity--;
        updatedCart[updatedCartIndex] = updatedCartItem;
      } else {
        const deletedCartItem = updatedCart.filter(
          (p) => p.id !== action.payload.id
        );
        return {
          ...state,
          cart: deletedCartItem,
          total: state.total - action.payload.offPrice,
        };
      }

      return {
        ...state,
        cart: updatedCart,
        total: state.total - action.payload.offPrice,
      };
    }
  }
};
export default cartReducer;
