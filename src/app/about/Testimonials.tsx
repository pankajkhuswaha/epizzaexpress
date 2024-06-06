/* eslint-disable @next/next/no-img-element */
"use client";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/constant/testmonial";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slickPrev();
  };

  return (
    <div>
      <section
        id="testimonios"
        className="testimonial-area testimonial-p pt-120 pb-115 fix"
      >
        <div className="container">
          <div className="flex gap-4 justify-between">
            <div className="title-about">
              <div className="section-title mb-10">
                <span>TESTIMONIALS</span>
                <h2>SOME FEEDBACKS</h2>
              </div>
            </div>
            <div className="flex gap-4 items-start justify-end">
              <button
                type="button"
                onClick={previous}
                className="border-2 rounded-full border-gray-700 flex items-center justify-center size-10 text-4xl md:size-16 hover:text-white hover:bg-primary"
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                onClick={next}
                className="border-2 rounded-full border-gray-700 flex items-center justify-center size-10 text-4xl md:size-16 hover:text-white hover:bg-primary"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
