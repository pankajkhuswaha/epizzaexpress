/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import About from "./about/About";
import menuData from "@/constant/menu";
import Testimonials from "./about/Testimonials";
import IntroVideo from "./about/IntroVideo";

export default function Home() {
  return (
    <>
      <div id="home" className="-z-10 -mt-[97px] h-screen">
        <div
          className="relative flex h-full w-full items-center"
          style={{
            backgroundImage: "url(/img/bg/header-bg.webp)",
          }}
        >
          <div className="container relative mt-10 flex w-full items-center md:justify-center">
            <div className="flex flex-[5] flex-col items-start pr-4 leading-8 md:flex-[3] md:items-end">
              <h2
                className="text-6xl font-bold md:text-end md:text-[2.7rem] lg:text-6xl"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <span className="leading-10 text-primary">WE TAKE </span> <br />{" "}
                PRIDE IN OUR FOOD
              </h2>
              <p
                data-animation="fadeInUp"
                data-delay=".6s"
                className="mt-10 text-xl text-white md:mt-4 md:text-end"
              >
                Made of fresh & premium ingredients
              </p>
              <Link
                href="/menu"
                className="btn ss-btn z-10 mt-10 cursor-pointer md:mt-4"
              >
                Our Menu
              </Link>
            </div>
            <div className="hidden flex-[5] md:block">
              <Image
                src="/img/pizza.webp"
                alt="pizza-image"
                className="-ml-10 h-[500px] w-full object-contain lg:h-[700px]"
                width={2000}
                height={2000}
              />
              <div className="offer-banner mr-10" data-animation="fadeInRight">
                <Image
                  src="/img/bg/offer.png"
                  alt="header-img"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* <div className="max-md:hidden overly-text absolute -z-10 top-[90%]">
            FRESH PIZZA
          </div> */}
        </div>
      </div>

      <IntroVideo />

      <div
        style={{
          background: "url(/img/bg/meal-bg.webp)",
        }}
      >
        <div className="container mt-20">
          <div className="section-title mb-65 text-center">
            <span> POPULAR</span>
            <h2>POPULAR MEAL</h2>
            <p className="mt-2">
              <img src="img/bg/line.png" alt="line" className="mx-auto" />
            </p>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {menuData.combo.map((item, index) => (
              <div
                key={index}
                className="mb-4 flex justify-between rounded max-md:flex-col md:items-center"
              >
                {item.img && (
                  <div className="meal-img">
                    <img
                      src={item.img}
                      alt="img"
                      className="h-24 w-24 rounded object-cover"
                    />
                  </div>
                )}
                <div className="meal-content flex-1 md:px-4">
                  <h5 className="font-bold">
                    <a className="hover:text-primary" href="#">
                      {item.name}
                    </a>
                  </h5>
                  <p>{item.description}</p>
                </div>
                <div className="my-4 border-b-2 border-dotted md:hidden"></div>
                <div className="meal-price text-right max-md:my-5">
                  <a href="#" className="font-bold text-yellow-500">
                    {item.price}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="py-10">
            <Image
              src="/img/banner/offer.png"
              alt="banner"
              className="img mx-auto"
              width={1000}
              height={200}
            />
          </div>
        </div>
      </div>

      <div style={{ background: "url(/img/bg/test-bg.png)" }}>
        <Testimonials />
      </div>

      <About />
    </>
  );
}
