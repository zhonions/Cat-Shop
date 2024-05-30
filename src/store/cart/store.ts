

import { createStore } from '@reduxjs/toolkit';
import cartReducer from './reducers';

const store = createStore(cartReducer);

export default store;
