import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity++;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;