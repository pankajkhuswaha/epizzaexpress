export default function Home() {
  return (
    <section id="home" className="slider-area fix p-relative">
      <div
        className="single-slider slider-bg d-flex align-items-center"
        style={{ backgroundImage: "url(/img/bg/header-bg.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-5 col-md-5">
              <div className="slider-content s-slider-content text-right">
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
            </div>
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
        </div>
      </div>
    </section>
  );
}
