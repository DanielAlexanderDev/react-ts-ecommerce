import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../types/types";

interface CartSliceState {
  cart: CartProduct[];
}

const initialState: CartSliceState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartProduct>) {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.cart = [...state.cart];
        state.cart[index].quantity += 1;
      } else {
        state.cart = [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(({ id }) => id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
