import React from "react";
import Header from "../components/Header";
import UmrahMain from "./components/UmrahMain";
import Benifits from "./components/Benifits";
import EconomyPackage from "./components/EconomyPackage";
import LuxuryPackage from "./components/LuxuryPackage";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <UmrahMain />
      <Benifits />
      <EconomyPackage />
      <LuxuryPackage />
      <section id="whyus">
        <WhyUs />
      </section>

      <section id="stories">
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
};

export default page;
