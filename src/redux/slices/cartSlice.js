import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const filterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
