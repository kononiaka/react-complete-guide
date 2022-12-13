import { configureStore } from '@reduxjs/toolkit';

import toggleCartSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: { ui: toggleCartSlice.reducer, cart: cartSlice.reducer }
});

export default store;
