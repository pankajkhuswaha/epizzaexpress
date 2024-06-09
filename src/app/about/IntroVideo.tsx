/* eslint-disable @next/next/no-img-element */
"use client";
import { XCircleIcon } from "lucide-react";
import { useState } from "react";

const IntroVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section
      id="video"
      className="video pt-200 pb-200"
      style={{
        backgroundImage: "url(img/video/video-bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <center className="container">
        <button
          className="popup-video mt-100 mb-100  mx-auto"
          onClick={() => setShowVideo(true)}
        >
          <img src="img/video/play.png" alt="play" className="" />
        </button>
      </center>
      {showVideo && (
        <div className="fixed w-full h-full bg-gray-900/80 z-50 top-0 left-0 flex items-center justify-center">
          <XCircleIcon
            onClick={() => setShowVideo(false)}
            color="white"
            fill="red"
            size={40}
            className="absolute top-28 right-10 cursor-pointer"
          />
          {/* <video src="https://www.youtube.com/watch?v=hlOveVGvAqU" className=""></video> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hlOveVGvAqU"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default IntroVideo;
