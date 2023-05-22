import React, { useEffect } from "react";
import "./Homepage.scss";
import Hero from "../../UI/hero/Hero";
import Categories from "../../UI/categories/Categories";
import Slider from "../../UI/slider/Slider";
import FetchError from "../../UI/fetchError/FetchError";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";

const HomePage = () => {
  useEffect(() => {
    scrollUp();
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const {
    isLoading,
    error,
    allProducts,
    laptops,
    phones,
    tablets,
    headphones,
    smartWatches,
  } = useSelector((store) => store.products);

  return (
    <>
      {isLoading && <Loader />}

      {error && <FetchError error={error} />}

      {allProducts && (
        <div className="homepage">
          <Hero />

          <div id="homepage__content">
            <Categories />
            <Slider
              data={laptops}
              headerTitle="Popular Laptops"
              link="/categories/Laptops"
            />
            <Slider
              data={phones}
              headerTitle="Popular Phones"
              link="/categories/Phones"
            />
            <Slider
              data={tablets}
              headerTitle="Popular Tablets"
              link="/categories/Tablets"
            />
            <Slider
              data={headphones}
              headerTitle="Popular Headphones"
              link="/categories/Headphones"
            />
            <Slider
              data={smartWatches}
              headerTitle="Popular Smart Watches"
              link="/categories/Smart Watches"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
