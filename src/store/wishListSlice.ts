import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addToWishList() {},
    removeFromWishList() {},
  },
});

export const wishListActions = wishListSlice.actions;
