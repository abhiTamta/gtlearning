import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            state.cartItems.push(action.payload);
            console.log("Added to cart:", state.cartItems);
        }
    }
})

export const { addtocart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer