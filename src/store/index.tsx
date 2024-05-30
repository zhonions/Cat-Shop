
import { combineReducers } from 'redux';
import cartReducer from './cart/reducers'; // Importe o reducer correto

const rootReducer = combineReducers({
  cartReducer, // Adicione aqui todos os seus reducers
});

export type RootState = ReturnType<typeof rootReducer>;
