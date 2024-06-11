"use client";
import { useEffect, useState } from "react";

const useWidth = (width = 768) => {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    setShow(window.innerWidth < width);
  },[width])

  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth < width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return show;
};

export default useWidth;
