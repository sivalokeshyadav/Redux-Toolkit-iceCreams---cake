import { createSlice } from "@reduxjs/toolkit";

const initialState = { numOfCakes: 10 };

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderCake: (state) => {
      state.numOfCakes -= 1;
    },
    reStockCake: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const { orderCake, reStockCake } = cakeSlice.actions;
export default cakeSlice.reducer;
