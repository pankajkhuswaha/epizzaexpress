"use client";

import { ArrowBigUp } from "lucide-react";
import React, { useState, useEffect } from "react";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  const toggleVisibility = () => {
    if (window.screenY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="bg-primary size-12 text-white fonst-bold text-4xl rounded-full overflow-hidden fixed bottom-10 right-6 cursor-pointer flex items-center justify-center"
        >
          <ArrowBigUp />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
