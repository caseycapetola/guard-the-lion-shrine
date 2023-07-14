import React from "react";
import "animate.css";
import Footer from "../components/Footer";

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
        <Footer />
      </div>
    </div>
  );
};

export default OrgsPage;
