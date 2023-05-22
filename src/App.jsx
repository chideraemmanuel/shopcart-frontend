import "./App.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout";
import Homepage from "./pages/homepage/Homepage";
import { useEffect } from "react";

// SWIPER STUFF
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ItemDetailsPage from "./pages/itemDetailsPage/ItemDetailsPage";
import CartPage from "./pages/cartPage/CartPage";
import CategoryPage from "./pages/categoryPage/categoryPage";
import { CategoriesContextProvider } from "./contexts/CategoriesContext";
import { NavMenuContextProvider } from "./contexts/NavMenuContext";
import { SearchContextProvider } from "./contexts/SearchContext";
import SearchResultPage from "./pages/searchResultPage/SearchResultPage";
import { client } from "./client";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setHeadphones,
  setLaptops,
  setLoading,
  setPhones,
  setSmartWatches,
  setTablets,
  updateProducts,
} from "./redux/features/productsSlice";
import { calculateTotals } from "./redux/features/cartSlice";
import NotFound from "./UI/notFound/NotFound";
import { Toaster } from "react-hot-toast";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="categories/:categoryName" element={<CategoryPage />} />
        <Route path="products/:productId" element={<ItemDetailsPage />} />
        <Route path="search/:searchKeyword" element={<SearchResultPage />} />
        <Route path="cart" element={<CartPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(setLoading(true));

    client
      .fetch("*[_type == 'product']")
      .then((data) => {
        dispatch(updateProducts(data));
        dispatch(setLaptops());
        dispatch(setPhones());
        dispatch(setTablets());
        dispatch(setHeadphones());
        dispatch(setSmartWatches());
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error));
        dispatch(setLoading(false));
      });
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [itemsInCart]);

  useEffect(() => {
    scrollUp();
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div className="App">
      <CategoriesContextProvider>
        <NavMenuContextProvider>
          <SearchContextProvider>
            <RouterProvider router={router} />
            <Toaster />
          </SearchContextProvider>
        </NavMenuContextProvider>
      </CategoriesContextProvider>
    </div>
  );
};

export default App;

/********************
 TODOS
*********************/

// MAKE CHECKOUT PAGE
// ADD SIMILAR ITEMS SUGGESTIONS TO ITEM DETAILS PAGE
// PAGINATION TO CATEGORIES PAGE!!!!!!!!!!!
// ADD FILTERS TO CATEGORES PAGE
