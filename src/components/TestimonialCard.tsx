/* eslint-disable @next/next/no-img-element */
"use client";
export interface Testimonial {
  content: string;
  name: string;
}

const TestimonialCard = (review: Testimonial) => {
  const { content, name } = review;
  return (
    <div className="w-[320px] mx-2">
      <div className="single-testimonial-bg p-4 -mb-[1px]">
        <div className="com-icon z-0">
          <img src="/img/bg/comment-icon.png" alt="img" />
        </div>
        <div className="star mb-30">
          <img src="/img/testimonial/star.png" alt="img" />
        </div>
        <p className="z-10 position-relative">{content}</p>
      </div>
      <div className="pl-2 flex gap-2 flex-col">
        <div className="arrow-yellwo pl-4">
          <img src="img/testimonial/arrow-box.png" alt="img" />
        </div>
        <div className="flex items-center gap-2 pl-2">
          <img src="img/testimonial/avatar01.png" alt="img" />
          <div className="ta-info">
            <h6>{name}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
