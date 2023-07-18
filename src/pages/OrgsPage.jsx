import React from "react";
import "animate.css";
import Footer from "../components/Footer";
import army from "../assets/army.jpeg";

const OrgsPage = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col flex-wrap text-center content-stretch">
        <div className="animate__animated animate__fadeInUp">
          <div className="flex-auto text-4xl pt-16">Organizations</div>
          <div className="p-16">
            <p className="text-2xl">
              Lion Ambassadors would like to thank the following organizations
              for their support in Guard the Lion Shrine.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <img
            className="w-96 mx-auto justify-center p-16 md:w-auto"
            src={army}
            alt="Penn State Army ROTC"
          />
          <div className="p-4 justify-center md:text-xl md:p-8 lg:text-2xl">
            The mission of the Lion's Guard is to develop proficiency in Army
            drill and ceremony in order to create well-rounded future officers,
            and to establish a stronger presence of Army ROTC in the Penn State
            community.
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OrgsPage;
