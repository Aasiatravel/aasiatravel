"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const LuxuryPackage = () => {
  return (
    <div className="economy-slider px-4 py-4 flex flex-col gap-3 lg:gap-6 overflow-hidden">
      <h1 className="text-center  text-[20px] font-semibold lg:text-2xl ">
        Luxury Packages
      </h1>

      <Slider {...settings}>
        {luxuryData.map((pkg, index) => (
          <div key={index} className="package-slide px-2  ">
            <div className="w-[300px] lg:w-[350px]  rounded-xl bg-white shadow-md overflow-hidden">
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg ">{pkg.title}</h2>

                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md w-fit">
                  {pkg.duration}
                </span>

                <div className="text-[#44454C] text-sm flex flex-col gap-1">
                  <p>✈ {pkg.departure}</p>
                  <p>📍 {pkg.location}</p>
                  <p>📅 {pkg.date}</p>
                </div>

                <div className="flex flex-col text-sm gap-0.5 font-medium">
                  <span className="text-[#44454C]">Starting From</span>
                  <span className="text-sm font-medium">{pkg.price}</span>
                </div>

                <button className="bg-black text-white py-2 rounded-md cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LuxuryPackage;
const luxuryData = [
  {
    id: 1,
    title: "Luxury Umrah Package",
    image: "/assets/images/makkah_haram.png",
    duration: "15-20 Days",
    departure: "Via Flight",
    location: "Delhi → Jeddah",
    date: "30 May 2026",
    price: "₹1,00,000-₹1,50,000",
  },
  {
    id: 2,
    title: "Luxury Umrah Package",
    image: "/assets/images/madina_masjid.png",
    duration: "15-20 Days",
    departure: "Via Flight",
    location: "Mumbai → Jeddah",
    date: "10 June 2026",
    price: "₹1,00,000-₹1,55,000",
  },
  {
    id: 3,
    title: "Luxury Umrah Package",
    image: "/assets/images/makkah_haram2.jpg",
    duration: "15-20 Days",
    departure: "Via Flight",
    location: "Hyderabad → Jeddah",
    date: "1 July 2026",
    price: "₹1,00,000-₹1,52,000",
  },
  {
    id: 4,
    title: "Luxury Umrah Package",
    image: "/assets/images/madina_masjid.png",
    duration: "15-20 Days",
    departure: "Via Flight",
    location: "Lucknow → Jeddah",
    date: "5 August 2026",
    price: "₹1,00,000-₹1,60,000",
  },
];
