/* eslint-disable @next/next/no-img-element */
"use client";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { PhoneCallIcon } from "lucide-react";
const Footer = () => {
  const pathname = usePathname();
  const atAdmin = pathname.includes("admin");
  if (atAdmin) return;
  return (
    <footer className="footer-bg footer-p">
      <a href="https://wa.me/918307057298?text=Hi, I am interested in our first signup offer on epizzaexpress website could you send me more details" target="_blank" className="block fixed size-12 bottom-6 cursor-pointer right-6 z-50">
        <img style={{filter: "drop-shadow(2px 1px 5px white)"}} src="/whatsapp.svg" alt="whatsapp" />
      </a>
      <div
        className="footer-top py-20"
        
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget text-center mb-30">
                <div className="flog mt-50 mb-30">
                  <a href="#">
                    <img src="/img/logo/logo.png" alt="logo" />
                  </a>
                </div>
                <div className="footer-text mb-20">
                  <p>
                    At EPizzaExpress, we bring the joy of gourmet pizza right to
                    your doorstep. Our pizzas are crafted with the freshest
                    ingredients, hand-tossed dough, and authentic recipes,
                    ensuring every bite is a delightful experience.
                  </p>
                </div>
                <div className="footer-social mt-30 flex items-center gap-4 justify-center">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaXTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30 text-center">
                <div className="f-time-icon">
                  <img src="/img/bg/time-bg.png" alt="logo" />
                </div>
                <div className="f-widget-title mt-100">
                  <span>AVAILABLE</span>
                  <h5>OPENING HOURS</h5>
                </div>
                <div className="footer-link">
                  <div className="f-time">
                    <ul>
                      <li className="flex">
                        <p className="day text-lg font-semibold">Monday - Sunday <br /> 11:00 AM - 23:00 PM</p>
                      </li>
                      {/* <li>
                        <div className="day">TUESDAY</div>
                        <div className="time">11:00 AM - 23:00 PM</div>
                      </li>
                      <li>
                        <div className="day">SATURDAY</div>
                        <div className="time">11:00 AM - 23:00 PM</div>
                      </li>
                      <li>
                        <div className="day">SUNDAY</div>
                        <div className="time">11:00 AM - 23:00 PM</div>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30 text-center">
                <div className="f-contact-icon">
                  <img src="/img/bg/f-contact-icon.png" alt="logo" />
                </div>
                <div className="f-widget-title mt-100">
                  <span>CONTACT</span>
                  <h5>GET IN TOUCH</h5>
                </div>
                <div className="footer-link">
                  <div className="f-contact">
                    <p>
                      60 Feet Road , Shop No 6 ,Nagla chowk , Jawahar colony
                      Faridabad
                    </p>
                     <a
                      href="tel:8684848727"
                      target="_blank"
                      className="flex gap-4 items-center justify-center my-4 text-xl font-semibold hover:text-primary"
                    >
                     <PhoneCallIcon color="white"/> 8684848727 
                    </a>
                    <a
                      href="https://maps.app.goo.gl/zHQhSjvMC7BGREpH9"
                      target="_blank"
                      className="btn ss-btn"
                    >
                      GET DIRECTIONS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center className="border-t py-2">
        copyright {new Date().getFullYear()} © Epizzaexpress | Design and developed by MSP
        Webcraft
      </center>
    </footer>
  );
};

export default Footer;
