import React, { useEffect } from "react";
import "./Categories.scss";
import Category from "../../components/category/Category";
import { client } from "../../client";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  updateCategories,
} from "../../redux/features/categoriesSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector(
    (store) => store.categories
  );

  useEffect(() => {
    dispatch(setLoading(true));

    client
      .fetch("*[_type == 'category']")
      .then((data) => {
        dispatch(updateCategories(data));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError(error));
        dispatch(setLoading(false));
      });
  }, []);

  return (
    <div className="categories">
      <h2 className="categories__header">Featured categories</h2>
      {isLoading && <span>Loading...</span>}

      {error && <span>Could not fetch categories :(</span>}

      {categories && (
        <div className="categories__items">
          {categories.map((item) => (
            <Category {...item} key={item._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
