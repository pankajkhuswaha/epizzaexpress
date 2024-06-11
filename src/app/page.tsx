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
      <div id="home" className="h-screen -mt-[97px] -z-10">
        <div
          className="h-full w-full flex items-center relative"
          style={{
            backgroundImage: "url(/img/bg/header-bg.webp)",
          }}
        >
          <div className="container w-full flex items-center mt-10 md:justify-center relative">
            <div className="flex-[5] md:flex-[3] flex flex-col items-start md:items-end pr-4 leading-8">
              <h2
                className="text-6xl md:text-[2.7rem] lg:text-6xl font-bold md:text-end"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <span className="text-primary leading-10">WE TAKE </span> <br />{" "}
                PRIDE IN OUR FOOD
              </h2>
              <p
                data-animation="fadeInUp"
                data-delay=".6s"
                className="text-white text-xl mt-10 md:mt-4 md:text-end"
              >
                Made of fresh & premium ingredients
              </p>
              <Link
                href="/menu"
                className="btn ss-btn mt-10 md:mt-4 cursor-pointer  z-10"
              >
                Our Menu
              </Link>
            </div>
            <div className="flex-[5] hidden md:block">
              <Image
                src="/img/pizza.webp"
                alt="pizza-image"
                className=" w-full h-[500px] lg:h-[700px] object-contain -ml-10 "
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
      <div style={{ background: "url(/img/bg/meal-bg.webp)" }}>
        <div className="container mt-20">
          <div className="section-title text-center mb-65">
            <span> POPULAR</span>
            <h2>POPULAR MEAL</h2>
            <p className="mt-2">
              <img src="img/bg/line.png" alt="line" className="mx-auto" />
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {menuData.combo.map((item, index) => (
              <div
                key={index}
                className="flex max-md:flex-col justify-between md:items-center mb-4 rounded"
              >
                {item.img && (
                  <div className="meal-img">
                    <img
                      src={item.img}
                      alt="img"
                      className="w-24 h-24 object-cover rounded"
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
                <div className="border-b-2 border-dotted md:hidden my-4"></div>
                <div className="meal-price text-right max-md:my-5">
                  <a href="#" className="text-yellow-500 font-bold">
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
