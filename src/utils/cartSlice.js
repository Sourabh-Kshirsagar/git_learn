import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: () => {},
  },
});
