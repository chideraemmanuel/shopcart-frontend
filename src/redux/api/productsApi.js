import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    fetchCategories: builder.query({
      query: () => "categories",
    }),
  }),
});

export const { useFetchCategoriesQuery } = productsApi;
