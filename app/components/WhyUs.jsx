"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import CustomisedTrip from "../../public/assets/icons/customizedtrips.svg";
import AdvanceBookingIcon from "../../public/assets/icons/advancebookingicon.svg";
import ReferralSystem from "../../public/assets/icons/referralsystem.svg";
import AssetsIcon from "../../public/assets/icons/assetsicon.svg";
import Transport from "../../public/assets/icons/transportbookingicon.svg";
import Agent from "../../public/assets/icons/agenticon.svg";
import Image from "next/image";
const WhyUs = () => {
  const features = [
    {
      icon: CustomisedTrip,
      title: "Customized Trips",
      desc: "Personalized travel plans tailored to your needs for a seamless journey.",
    },
    {
      icon: AdvanceBookingIcon,
      title: "Advance Booking",
      desc: "Book early and enjoy the best deals with guaranteed availability.",
    },
    {
      icon: ReferralSystem,
      title: "Refer",
      desc: "Refer & earn discounts on your bookings.",
    },
    {
      icon: AssetsIcon,
      title: "24 X 7 Support",
      desc: "Get 24/7 support for bookings, updates, and assistance anytime.",
    },
    {
      icon: Transport,
      title: "Transport Booking",
      desc: "Reliable and comfortable transport services for a smooth journey.",
    },
    {
      icon: Agent,
      title: "Join as Agent",
      desc: "Partner with us and grow your business with our trusted services.",
    },
  ];

  return (
    <div className="px-4 py-4">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-xl lg:text-2xl font-semibold">why book with us?</h2>

        <div className="grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-5 lg:max-w-[80%]">
          {features.map((item, index) => {
            const controls = useAnimation();

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                // SCROLL ANIMATION (slow or normal)
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  },
                }}
                // HOVER ANIMATION (fast pop)
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                animate={controls}
                onViewportLeave={() => controls.start({ opacity: 0, y: 40 })}
                viewport={{ amount: 0.3 }}
                className="flex flex-col items-center gap-3 bg-[#e6effb] px-3 py-4 lg:px-4 lg:py-8 rounded-2xl"
              >
                <div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <h4 className="font-medium lg:text-xl">{item.title}</h4>
                  <p className="text-[12px] lg:text-[14px] text-[#44454C]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
