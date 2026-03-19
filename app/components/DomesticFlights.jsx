"use client";

import React from "react";
import Slider from "react-slick";

const DomesticFlights = () => {
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
    <>
      <div className="px-4 py-4 flex flex-col  gap-6 overflow-hidden">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-xl lg:text-2xl font-semibold">
            Domestic Flights
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
    </>
  );
};

export default DomesticFlights;

const destinations = [
  {
    route: "New Delhi to Kashmir",
    image: "/assets/images/kashmir.webp",
  },
  {
    route: "Mumbai to Goa",
    image: "/assets/images/goa.webp",
  },
  {
    route: "New Delhi to manali",
    image: "/assets/images/manali.jpg",
  },
  {
    route: "Bangalore to kashmir",
    image: "/assets/images/kashmir.webp",
  },
  {
    route: "Hyderabad to manali",
    image: "/assets/images/manali.jpg",
  },
];
