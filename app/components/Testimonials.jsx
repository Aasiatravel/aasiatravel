"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/sliderfix.css";

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="px-4 py-4">
      <h1 className="text-xl text-center font-medium">Testimonials</h1>

      <div className="mt-6 lg:mt-7">
        <Slider {...sliderSettings}>
          {data.map((item, index) => (
            <div key={index} className="px-1 lg:px-2">
              <div className="rounded-2xl flex flex-col items-center max-w-[370px] gap-3 px-3 py-6 lg:py-8 bg-[#e6effb] shadow-sm">
                {/* Avatar */}
                {item.img === "icon" ? (
                  <div className="w-20 h-20 flex items-center justify-center bg-gray-300 rounded-full text-lg font-semibold text-gray-700">
                    {item.name}
                  </div>
                ) : (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}

                <div className="flex flex-col items-center gap-2 px-4 text-center">
                  <p className="font-medium lg:text-xl">{item.name}</p>
                  <p className="text-xs lg:text-[16px] text-[#44454C]">
                    {item.review.trim()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

const data = [
  {
    img: "icon",
    name: "User 1",
    review:
      "Smooth booking experience and great support throughout the journey.",
  },
  {
    img: "icon",
    name: "User 1",
    review:
      "Smooth booking experience and great support throughout the journey.",
  },
  {
    img: "icon",
    name: "User 1",
    review:
      "Smooth booking experience and great support throughout the journey.",
  },
  {
    img: "icon",
    name: "User 1",
    review:
      "Smooth booking experience and great support throughout the journey.",
  },
  {
    img: "icon",
    name: "User 1",
    review:
      "Smooth booking experience and great support throughout the journey.",
  },
  {
    img: "icon",
    name: "User 1",
    review:
      "Smooth booking experience and great support throughout the journey.",
  },
];
