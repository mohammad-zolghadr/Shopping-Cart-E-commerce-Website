import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import productReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';

const store = configureStore({
  reducer: combineReducers({ pState: productReducer, cState: cartReducer }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
