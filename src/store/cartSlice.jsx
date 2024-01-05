import { createSlice } from "@reduxjs/toolkit";
const initialState = !JSON.parse(localStorage.getItem("cart"))
  ? []
  : JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItemExists = state.some((item) => item.id === action.payload.id);
      if (newItemExists) {
        // Create a new state object before modifying it
        const newItemss = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, items: item.items + 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(newItemss));
        return newItemss;
      } else {
        // Create a new state object before modifying it
        const temp = [...state, { items: 1, ...action.payload }];
        localStorage.setItem("cart", JSON.stringify(temp));
        return temp;
      }
    },

    remove(state, action) {
      const filteredState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(filteredState));
      return filteredState;
    },

    incrementCart(state, action) {
      // Create a new state object before modifying it
      const newItemss = state.map((item) =>
        item.id === action.payload ? { ...item, items: item.items + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(newItemss));
      return newItemss;
    },

    decrementCart(state, action) {
      const newItemss = state.map((item) =>
        item.id === action.payload ? { ...item, items: item.items - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(newItemss));
      return newItemss;
    },
  },
});
export const { add, remove, incrementCart, decrementCart } = cartSlice.actions;
export default cartSlice.reducer;
