export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.payload._id),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "ADD_ONE_MORE":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c._id === action.payload.id ? (c.qty = action.payload.qty + 1) : c.qty
        ),
      };
    case "DELETE_ONE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c._id === action.payload.id ? (c.qty = action.payload.qty - 1) : c.qty
        ),
      };
    default:
      return state;
  }
};
