import React, { useState } from "react";
import "animate.css";
import Footer from "../components/Footer";
import group_shot from "../assets/group_shot.jpg";
import four_group from "../assets/four_group.jpg";
import two_group from "../assets/two_group.jpg";

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
          <div className="p-16">
            <h3 className="text-2xl">Our Mission</h3>
            <br />
            <p>
              The mission of Guard the Lion Shrine is to maintain a
              long-standing Homecoming Week tradition of guarding the Nittany
              Lion Shrine and putting on related programming and events for
              students, alumni, and friends.
            </p>
            <br />
            <p>
              Held immediately after the Homecoming parade every year, Guard The
              Lion Shrine is one of the longest-standing traditions which
              features live music, free food, games, and activities all centered
              around the Lion Shrine. Accompanied by Penn State ROTC volunteers
              who stand watch of the symbol of our best, guarding the Lion
              Shrine is a true representation of Penn State’s pride and
              community.
            </p>
          </div>
          {/* <div className="flex flex-wrap flex-grow">
            <img
              className="h-auto max-w-lg"
              src={four_group}
              alt="image description"
            />
            <img
              className="h-auto max-w-md"
              src={group_shot}
              alt="image description"
            />
          </div> */}
          <div className="grid grid-cols-2 grid-rows-2 items-center gap-4 m-16">
            <div className="row-span-2">
              <img
                className="h-auto max-w-xl mx-auto justify-center"
                src={four_group}
                alt="image description"
              />
            </div>
            <div className="items-center">
              <img
                className="h-auto w-96 mx-auto"
                src={group_shot}
                alt="image description"
              />
            </div>
            <div>
              <img
                className="h-auto w-96 mx-auto"
                src={two_group}
                alt="image description"
              />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default LandingPage;
