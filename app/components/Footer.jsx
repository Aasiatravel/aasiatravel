"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  // const scrollToSection = (id) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const link =
    "https://www.instagram.com/aasiatravel?igsh=MTRmYm5sNTdjeXAyYg==";
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // ⬅️ Slow scroll (increase to slow more)
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);

      // Easing for smoother, slower scroll
      const ease =
        progressRatio < 0.5
          ? 2 * progressRatio * progressRatio
          : -1 + (4 - 2 * progressRatio) * progressRatio;

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="pt-4 lg:pt-8">
      <div className="flex flex-col items-center gap-6 lg:gap-8 px-12 py-6 w-full bg-[#e6effb]">
        {/* NAV LINKS */}
        <div className="flex gap-6 text-xs lg:text-[20px] lg:gap-11 flex-wrap justify-center">
          <button
            onClick={() => scrollToSection("stories")}
            className="hover:text-green-800 cursor-pointer"
          >
            Stories
          </button>

          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-green-800 cursor-pointer"
          >
            Spiritual
          </button>

          <button
            onClick={() => scrollToSection("whyus")}
            className="hover:text-green-800 cursor-pointer"
          >
            Why Us
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-green-800 cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* OFFICE + SOCIAL */}
        <div className="flex flex-col lg:flex-row justify-around items-center w-full gap-5">
          <div className="flex flex-col text-xs lg:text-[16px] text-center">
            <p className="font-medium lg:text-[20px]">Office:</p>
            <p>Om vihar Uttam nagar West Delhi</p>
            <p>New Delhi - 59</p>
            <p>Phone +91 8800665701</p>
            <p>Email-aasiatravel@gmail.com</p>
          </div>

          <div className="flex justify-center lg:justify-end gap-3 lg:text-3xl">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="cursor-pointer" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
