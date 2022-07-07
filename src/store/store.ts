import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { wishListSlice } from "./wishListSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishList: wishListSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const selectCart = (state: RootState) => state.cart.cart;
