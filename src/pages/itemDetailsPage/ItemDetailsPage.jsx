import React, { useEffect, useState } from "react";
import "./ItemDetailsPage.scss";
import { useParams } from "react-router-dom";
import ItemDetails from "../../UI/itemDetails/ItemDetails";
import ItemSpecs from "../../components/itemSpecs/ItemSpecs";
import { useSelector } from "react-redux";
import FetchError from "../../UI/fetchError/FetchError";
import NotFound from "../../UI/notFound/NotFound";

const ItemDetailsPage = () => {
  const { productId } = useParams();

  const { allProducts, error } = useSelector((store) => store.products);

  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    setItemData(allProducts?.find((product) => product._id === productId));
  }, [allProducts, productId]);

  return (
    <>
      {error && <FetchError error={error} />}

      {itemData && itemData.length === 0 && <NotFound />}

      {itemData && (
        <div className="item-details-page">
          <ItemDetails itemData={itemData} {...itemData} />
          <ItemSpecs itemData={itemData} />
        </div>
      )}
    </>
  );
};

export default ItemDetailsPage;
