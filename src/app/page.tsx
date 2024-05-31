import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="home" className="h-screen -mt-24 -z-10">
        <div
          className="h-full"
          style={{
            backgroundImage: "url(/img/bg/header-bg.png)",
            zIndex: "-10",
          }}
        >
          <div className="container flex items-center pt-24 md:pt-36 lg:justify-center">
            <div className="flex-[5] lg:flex-[3] flex flex-col items-start lg:items-end pr-4 leading-8">
              <h2
                className="text-9xl font-bold lg:text-6xl lg:text-end"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <span className="text-primary leading-10">WE TAKE </span> <br />{" "}
                PRIDE IN OUR FOOD
              </h2>
              <p
                data-animation="fadeInUp"
                data-delay=".6s"
                className="text-white text-xl mt-10 lg:mt-4"
              >
                Made of fresh & premium ingredients
              </p>
              <Link
                href="/menu"
                className="btn ss-btn mt-10 lg:mt-4 cursor-pointer"
              >
                SignUp Now
              </Link>
            </div>
            <div className="flex-[5] hidden lg:block">
              <Image
                src="/img/pizza.png"
                alt="pizza-image"
                className="w-[800px] h-[600px] object-cover"
                width={2000}
                height={2000}
              />
              <div className="offer-banner mr-10" data-animation="fadeInRight">
                <Image src="/img/bg/offer.png" alt="header-img" width={300} height={300} />
              </div>
            </div>
          </div>
          <div className="overly-text">FRESH PIZZA</div>
          {/* <div className="container">
            <div className="">
              <h2 data-animation="fadeInUp" data-delay=".4s">
                <span>WE TAKE </span> PRIDE IN OUR FOOD
              </h2>
              <p data-animation="fadeInUp" data-delay=".6s">
                Made of fresh & premium ingredients
              </p>
              <div className="slider-btn mt-25 mb-30">
                <a
                  href="#"
                  className="btn ss-btn"
                  data-animation="fadeInRight"
                  data-delay=".8s"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-5 col-md-5"></div>
              <div className="col-xl-9 col-lg-7 col-md-7 pl-60">
                <img
                  src="img/bg/header-img.png"
                  alt="header-img"
                  className="header-img"
                  data-animation="fadeInLeft"
                />
                <div className="offer-banner" data-animation="fadeInRight">
                  <img src="img/bg/offer.png" alt="header-img" />
                </div>

                <div className="overly-text">FRESH MEAL</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
