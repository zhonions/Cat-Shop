// reducers.ts
import { ADD_TO_CART } from "./action";

interface Action {
  type: string;
  payload: any; // Aqui você pode definir o tipo do payload de acordo com sua aplicação
}

interface CartState {
  cartItems: any[]; // Altere para o tipo apropriado se necessário
}

const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state: CartState = initialState, action: Action): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
