"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { MdAutoStories, MdQueryStats, MdContactPhone } from "react-icons/md";
import Link from "next/link";
import Logo from "../../public/assets/icons/logo.svg";
import Image from "next/image";
const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // ⬅️ Slow scroll (increase to slow more)
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
    <>
      <div className="sticky top-0 w-full z-20 bg-white px-5 py-3 lg:px-5 lg:py-4 ">
        <div className="flex justify-between items-center">
          <div className="font-medium cursor-pointer ">
            <Link href="/">
              <Image src={Logo} alt="aasia_logo" className=" w-36 lg:w-48 " />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 text-lg font-medium text-[#44454C]">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-green-800 cursor-pointer"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("stories")}
              className="hover:text-green-800 cursor-pointer"
            >
              Stories
            </button>

            <Link href="/umrah" className="hover:text-green-800">
              Umrah
            </Link>

            <button
              onClick={() => scrollToSection("whyus")}
              className="hover:text-green-800 cursor-pointer"
            >
              Why Us
            </button>
          </div>

          {/* Mobile icon */}
          <div className="md:hidden">
            <GiHamburgerMenu
              className="text-xl"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 text-[#44454C] right-0 h-full w-72 p-6 bg-white z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-6">
          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2.5 border-b pb-2 cursor-pointer"
          >
            <IoMdHome className="text-2xl" /> Home
          </button>

          <button
            onClick={() => {
              scrollToSection("stories");
              setOpen(false);
            }}
            className="flex items-center gap-2.5 border-b pb-2 cursor-pointer"
          >
            <MdAutoStories className="text-2xl" /> Stories
          </button>

          <Link
            href="/umrah"
            className="flex items-center gap-2.5 border-b pb-2 cursor-pointer"
          >
            <MdAutoStories className="text-2xl" /> Umrah
          </Link>

          <button
            onClick={() => {
              scrollToSection("whyus");
              setOpen(false);
            }}
            className="flex items-center gap-2.5 border-b pb-2 cursor-pointer"
          >
            <MdQueryStats className="text-2xl" /> Why Us
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2.5 border-b pb-2 cursor-pointer"
          >
            <MdContactPhone className="text-2xl" /> Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
