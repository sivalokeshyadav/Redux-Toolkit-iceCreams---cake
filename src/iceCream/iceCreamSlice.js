import { createSlice } from "@reduxjs/toolkit";

const initialState = { numOfIceCreams: 20 };
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    orderIceCream: (state) => {
      state.numOfIceCreams -= 1;
    },
    restockIceCream: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

export const { orderIceCream, restockIceCream } = iceCreamSlice.actions;

export default iceCreamSlice.reducer;
