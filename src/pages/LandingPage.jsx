import React, { useState } from "react";
import "animate.css";

const LandingPage = () => {
  return (
    <>
      {/* <div className="animate__animated animate__fadeInUp"> */}
      <div className="bg-black text-white">
        <div className="flex flex-col flex-wrap text-center content-stretch">
          <div className="animate__animated animate__fadeInUp">
            <div className="flex-auto text-4xl pt-16">
              What is Guard the Lion Shrine?
            </div>
          </div>
          <div className="flex flex-grow">
            <iframe
              className="w-full aspect-[9/16] p-16"
              title="Youtube player"
              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
              src={"https://www.youtube.com/embed/FCxXHcTiDLY"}
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-32">
            <p>Testing</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default LandingPage;
