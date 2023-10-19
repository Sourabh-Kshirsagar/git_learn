import { createSlice } from "@reduxjs/toolkit";
// In this way we created the slices which is coming from redux tool kit
const cartSlice = createSlice({
  // Here we give the slice name
  name: "cart",
  // initial state for the slices
  initialState: {
    items: [],
  },

  // Here is the Reducer function with is triggered by the action to add the items
  reducers: {
    addItem: (state, action) => {
      // The state is the initial state and the action is the data that is coming form the action
      // of click to add the data in cart

      // in this way we push the data to the action and update the state accordingly
      state.items.push(action.payload);
    },

    // To remove an items we have something for this
    removeItem: (state, action) => {
      state.items.pop();
    },

    // in this way we clear or cart also
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// this is action here not the actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// this is the reducer not reducers this is given by the redux toolkit
export default createSlice.reducer;

// NOW THIS SLICE WILL BE GO INTO OUT STORE!!!
