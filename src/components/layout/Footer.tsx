"use client";

import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
  const atAdmin = pathname.includes("admin");
  if (atAdmin) return;
  return (
    <footer className="footer-bg footer-p">
      <div
        className="footer-top pt-120 pb-200"
        style={{
          background: "url(/img/bg/footer-bg.png) no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget text-center mb-30">
                <div className="flog mt-50 mb-30">
                  <a href="#">
                    <img src="img/logo/logo.png" alt="logo" />
                  </a>
                </div>
                <div className="footer-text mb-20">
                  <p>
                    Sed ut perspiciatis unde om is nerror sit voluptatem
                    accustium dolorem tium totam rem aperam eaque ipsa quae ab
                    illose inntore veritatis
                  </p>
                </div>
                <div className="footer-social mt-30">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30 text-center">
                <div className="f-time-icon">
                  <img src="img/bg/time-bg.png" alt="logo" />
                </div>
                <div className="f-widget-title mt-100">
                  <span>AVAILABLE</span>
                  <h5>OPENING HOURS</h5>
                </div>
                <div className="footer-link">
                  <div className="f-time">
                    <ul>
                      <li>
                        <div className="day">MONDAY</div>
                        <div className="time">9.00 - 22.00</div>
                      </li>
                      <li>
                        <div className="day">TUESDAY</div>
                        <div className="time">9.00 - 22.00</div>
                      </li>
                      <li>
                        <div className="day">SATURDAY</div>
                        <div className="time">9.00 - 22.00</div>
                      </li>
                      <li>
                        <div className="day">SUNDAY</div>
                        <div className="time">9.00 - 22.00</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30 text-center">
                <div className="f-contact-icon">
                  <img src="img/bg/f-contact-icon.png" alt="logo" />
                </div>
                <div className="f-widget-title mt-100">
                  <span>CONTACT</span>
                  <h5>GET IN TOUCH</h5>
                </div>
                <div className="footer-link">
                  <div className="f-contact">
                    <p>12/7Aabot, Poor Street, New York United States</p>
                    <a href="#" className="btn ss-btn mt-20">
                      GET DIRECTIONS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
