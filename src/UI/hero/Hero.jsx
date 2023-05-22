import React from "react";
import "./Hero.scss";
import heroBg from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ background: `url(${heroBg}) no-repeat center center/cover` }}
    >
      <div className="hero__info">
        <h1 className="hero__info--header">
          Your destination for the best deals online.
        </h1>
        <p className="hero__info--paragraph">
          Discover high-quality products at unbeatable prices. Start exploring
          our collection now!
        </p>
        <a href="#homepage__content" className="hero__info--button">
          Explore
        </a>
      </div>
    </section>
  );
};

export default Hero;
