import React, { useEffect } from "react";
import "./Showcase.scss";
import ItemCard from "../../components/itemCard/ItemCard";

const Showcase = ({ data = [] }) => {
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
    <section className="showcase">
      <div className="showcase__items">
        {data.map((item) => (
          <ItemCard {...item} key={item._id} allItemDetails={item} />
        ))}
      </div>
    </section>
  );
};

export default Showcase;
