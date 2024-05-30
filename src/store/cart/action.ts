import { Cat } from '../../components/CatsData';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Tipagem para o parâmetro 'item' usando o tipo 'Cat'
export const addItemsToCart = (item: Cat) => ({
    type: ADD_TO_CART,
    payload: item,
});
