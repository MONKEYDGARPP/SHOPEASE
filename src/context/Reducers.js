export const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return{...state, 
            cart:[...state.cart,
            {...action.payload,qty:1}
        ]};
        case "REMOVE_FROM_CART":
            return{...state,
            cart: state.cart.filter((c)=> c._id !== action.payload._id)
        };
        case "CLEAR_CART":
            return{...state,cart:[]
        };
        case "ADD_ONE_MORE":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                  c._id === action.payload.id ? (c.qty = action.payload.qty + 1 ) : c.qty
                ),
              };
        case "DELETE_ONE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => 
                c._id === action.payload.id ? (c.qty = action.payload.qty - 1) : c.qty
                )
            }
        default:
            return state;
    }
};

export const productReducer = (state,action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return {...state, sort:action.payload};
        case "FILTER_BY_STOCK":
            return {...state, byStock : !state.byStock};
        case "FILTER_BY_DELIVERY":
            return {...state, byFastDelivery : !state.byFastDelivery};
        case "FILTER_BY_RATING":
            return {...state, byRating: action.payload};
        case "FILTER_BY_SEARCH":
            return {...state, searchQuery : action.payload}
        case "CLEAR_FILTERS":
            return { byStock: false, byFastDelivery: false, byRating: 0 };
        case "FILTER_BY_GENDER":
            return {...state, byGender : action.payload}
        case "FILTER_BY_SIZE":
            return {...state, bySize : action.payload}
        default:
            return state;
    }
};
