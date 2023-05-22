import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  categories: null,
};

const categoriesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      state.categories = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { updateCategories, setLoading, setError } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
