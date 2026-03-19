"use client";

import React from "react";
import Slider from "react-slick";

const InternationalFlights = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    adaptiveHeight: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1.1 } },
    ],
  };

  return (
    <div className="px-4 py-4 flex flex-col  gap-4 overflow-hidden">
      <h2 className=" text-center text-gray-700  text-sm">
        Enjoy 5–15% savings compared to other platforms, backed by reliable and
        transparent travel services.
      </h2>
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-xl lg:text-2xl font-semibold">
          International Flights
        </h1>
      </div>

      <Slider {...settings}>
        {destinations.map((item, index) => (
          <div key={index} className="px-2 lg:px-3">
            <div className="w-70 lg:w-80  bg-[#e6effb] rounded-xl shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.route}
                className="h-56 w-full object-cover"
              />
              <div className="py-4 text-center">{item.route}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InternationalFlights;

const destinations = [
  {
    route: "New Delhi to Switzerland",
    image: "/assets/images/switzerland2.jpg",
  },
  {
    route: "Mumbai to Dubai",
    image: "/assets/images/dubai.jpg",
  },
  {
    route: "New Delhi to London",
    image: "/assets/images/london.jpg",
  },
  {
    route: "Bangalore to Norway",
    image: "/assets/images/norway.jpg",
  },
  {
    route: "Hyderabad to turkey",
    image: "/assets/images/turkey.jpg",
  },
];
