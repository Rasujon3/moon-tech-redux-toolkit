import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const getProducts = createAsyncThunk("products/getProduct", async () => {});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
