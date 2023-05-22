import React, { useEffect, useState } from "react";
import "./CategoryPage.scss";
import { useParams } from "react-router-dom";
import Showcase from "../../UI/showcase/Showcase";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import FetchError from "../../UI/fetchError/FetchError";
import NotFound from "../../UI/notFound/NotFound";

const CategoryPage = () => {
  const [showcaseData, setShowcaseData] = useState(null);
  const { categoryName } = useParams();
  const { allProducts, error } = useSelector((store) => store.products);

  useEffect(() => {
    setShowcaseData(
      allProducts?.filter(
        (product) => product.categories[0].categoryName === `${categoryName}`
      )
    );
  }, [categoryName, allProducts]);

  return (
    <>
      {!showcaseData && !error && <Loader />}

      {error && <FetchError error={error} />}

      {showcaseData && showcaseData.length === 0 && !error && <NotFound />}

      {showcaseData && (
        <div className="category-page">
          <h2 className="category-page__header">{categoryName} for you!</h2>
          <Showcase data={showcaseData} />
        </div>
      )}
    </>
  );
};

export default CategoryPage;
