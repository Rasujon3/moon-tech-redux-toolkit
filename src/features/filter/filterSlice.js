import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: false,
  brands: [],
  keyword: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = filterSlice.actions;

export default filterSlice.reducer;
