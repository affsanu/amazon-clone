"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="Lazy" src="/assets/banner/banner1.jpg" alt=" " />
        </div>
        <div>
          <img loading="Lazy" src="/assets/banner/banner2.jpg" alt=" " />
        </div>
        <div>
          <img loading="Lazy" src="/assets/banner/banner3.jpg" alt=" " />
        </div>
        <div>
          <img loading="Lazy" src="/assets/banner/banner4.jpg" alt=" " />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
