import React from "react";
import "animate.css";
import Footer from "../components/Footer";
import poz from "../assets/poz_dark_adobe_express.svg";

const SchedulePage = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col flex-wrap text-center content-stretch">
        <div className="animate__animated animate__fadeIn">
          <div className="flex-auto text-4xl pt-16">Schedule</div>
          <p className="p-16 text-2xl">Schedule TBD</p>
        </div>
        <div className="object-center">
          <img src={poz} className="mx-auto w-96" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SchedulePage;
