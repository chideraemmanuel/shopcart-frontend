import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  allProducts: null,
  laptops: [],
  phones: [],
  tablets: [],
  headphones: [],
  smartWatches: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      const products = action.payload.map((item) => ({
        ...item,
        inCart: false,
        quantityInCart: 0,
      }));
      state.allProducts = products;
    },
    setLaptops: (state) => {
      const laptops = state.allProducts
        .filter((product) => product.categories[0].categoryName === "Laptops")
        .splice(0, 7);
      state.laptops = laptops;
    },
    setPhones: (state) => {
      const phones = state.allProducts
        .filter((product) => product.categories[0].categoryName === "Phones")
        .splice(0, 7);
      state.phones = phones;
    },
    setTablets: (state) => {
      const tablets = state.allProducts
        .filter((product) => product.categories[0].categoryName === "Tablets")
        .splice(0, 7);
      state.tablets = tablets;
    },
    setHeadphones: (state) => {
      const headphones = state.allProducts
        .filter(
          (product) => product.categories[0].categoryName === "Headphones"
        )
        .splice(0, 7);
      state.headphones = headphones;
    },
    setSmartWatches: (state) => {
      const smartWatches = state.allProducts
        .filter(
          (product) => product.categories[0].categoryName === "Smart Watches"
        )
        .splice(0, 7);
      state.smartWatches = smartWatches;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    // SYNCING ACTIONS
    // FOR SYNCING PRODUCTS STATE WITH CART STATE
    syncAddToCartValues: (state, action) => {
      const addedItem = state.allProducts.find(
        (item) => item._id === action.payload._id
      );
      addedItem.inCart = true;
      addedItem.quantityInCart = 1;
    },
    syncRemoveFromCartValues: (state, action) => {
      const removedItem = state.allProducts.find(
        (item) => item._id === action.payload._id
      );
      removedItem.inCart = false;
      removedItem.quantityInCart = 0;
    },
    syncIncreaseItemQuantityValues: (state, action) => {
      const itemToIncrease = state.allProducts.find(
        (item) => item._id === action.payload._id
      );

      itemToIncrease.quantityInCart += 1;
    },
    syncDecreaseItemQuantityValues: (state, action) => {
      const itemToDecrease = state.allProducts.find(
        (item) => item._id === action.payload._id
      );

      itemToDecrease.quantityInCart -= 1;
    },
    syncClearCartValues: (state) => {
      state.allProducts.forEach((item) => {
        item.inCart = false;
        item.quantityInCart = 0;
      });
    },
  },
});

export const {
  updateProducts,
  setLaptops,
  setPhones,
  setTablets,
  setHeadphones,
  setSmartWatches,
  setLoading,
  setError,
  syncAddToCartValues,
  syncRemoveFromCartValues,
  syncIncreaseItemQuantityValues,
  syncDecreaseItemQuantityValues,
  syncClearCartValues,
} = productsSlice.actions;

export default productsSlice.reducer;
