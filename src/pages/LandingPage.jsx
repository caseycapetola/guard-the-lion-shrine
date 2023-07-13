import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";

const LandingPage = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex flex-col flex-wrap text-center content-stretch">
          <div className="bg-red-500 flex-auto">
            What is Guard the Lion Shrine?
          </div>
          <div className="bg-blue-500 flex flex-grow">
            <iframe
              className="w-full aspect-[9/16] p-16"
              title="Youtube player"
              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
              src={"https://www.youtube.com/embed/FCxXHcTiDLY"}
              allowFullScreen
            ></iframe>
          </div>
          <div className="">
            <p>Testing</p>
          </div>
        </div>
      </div>

      {/* <Container>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/FCxXHcTiDLY"
            title="GTLS Video"
            allowFullScreen
          ></iframe>
        </div>
      </Container> */}
    </>
  );
};

export default LandingPage;
