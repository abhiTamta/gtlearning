import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalAmount: 0,
    discount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.totalAmount += action.payload.price;

            // Calculate discount if 3 or more items are in the cart
            if (state.items.length >= 3) {
                state.discount = state.totalAmount - 10000;
                state.discount = state.discount > 0 ? state.discount : 0;
            } else {
                state.discount = 0;
            }
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.totalAmount -= state.items[index].price;
                state.items.splice(index, 1);
            }

            // Recalculate discount
            if (state.items.length >= 3) {
                state.discount = state.totalAmount - 10000;
                state.discount = state.discount > 0 ? state.discount : 0;
            } else {
                state.discount = 0;
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;