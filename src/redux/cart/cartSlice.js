import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // checking if the product already exist in cart
      let existingProduct = state.products.findIndex(
        (product) => product.id == action.payload.id
      );

      if (existingProduct != -1) {
        const cart = [...state.products];
        // index of existing product in cart
        const findIndex = cart.findIndex(
          (product) => product.id === action.payload.id
        );
        cart[findIndex].count += 1;
        state.products = [...cart];
      } else {
        action.payload.count = 1;
        state.products = [...state.products, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      const cartProducts = state.products.filter(
        (product) => product != action.payload
      );
      state.products = cartProducts;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
