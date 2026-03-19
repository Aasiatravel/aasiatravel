import React from "react";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import InternationalFlights from "./components/InternationalFlights";
import DomesticFlights from "./components/DomesticFlights";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div className="">
      <Header />

      <section id="home">
        <TopSection />
        <InternationalFlights />
        <DomesticFlights />
      </section>

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
