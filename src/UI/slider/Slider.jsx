import React from "react";
import "./Slider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import SlideItem from "../../components/slideItem/SlideItem";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Slider = ({ headerTitle, data, link }) => {
  return (
    <motion.div
      className="slider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="slider__header">
        <h2 className="slider__header--title">{headerTitle}</h2>
        <Link to={link}>See all</Link>
      </div>

      <Swiper
        slidesPerView={10}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          1920: {
            slidesPerView: 7.5,
          },
          1440: {
            slidesPerView: 6.5,
          },
          1024: {
            slidesPerView: 5.5,
          },
          768: {
            slidesPerView: 4.5,
          },
          500: {
            slidesPerView: 3.5,
          },
          0: {
            slidesPerView: 2.5,
          },
        }}
        className="mySwiper"
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item._id}>
              <SlideItem {...item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </motion.div>
  );
};

export default Slider;
