import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItem } from "./cartSlice";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params: Record<string, string>) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<CartItem[]>(
      `https://63de9e9ff1af41051b16642d.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data as CartItem[];
  }
);


type Pizza = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  sizes: number[],
  types: number[],
  rating: number,
}
interface PizzaSliceState {
  items: Pizza[],
  status: 'loading' | 'success' | 'error',
}

const initialState: PizzaSliceState = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export const selectPizzaData = (state: RootState) => state.pizza;

export default pizzaSlice.reducer;
