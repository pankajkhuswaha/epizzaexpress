import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="home" className="h-screen -mt-32 -z-10">
        <div
          className="h-full w-full flex items-center"
          style={{
            backgroundImage: "url(/img/bg/header-bg.png)",
            zIndex: "-10",
          }}
        >
          <div className="container w-full flex items-center mt-10 lg:justify-center">
            <div className="flex-[5] lg:flex-[3] flex flex-col items-start lg:items-end pr-4 leading-8">
              <h2
                className="text-6xl md:text-9xl font-bold lg:text-6xl lg:text-end"
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
                <Image
                  src="/img/bg/offer.png"
                  alt="header-img"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div className="max-md:hidden overly-text absolute top-1/3 lg:top-1/2">FRESH PIZZA</div>
          
        </div>
      </div>
    </>
  );
}
