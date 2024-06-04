import BreadCrumb from "@/components/BreadCrumb";
import React from "react";

const ContactUs = () => {
  return (
    <section id="conatct" className="contact-area contact-bg p-relative fix">
      <BreadCrumb name="Contact us" path="contact" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title mb-12">
              <span>Contact</span>
              <h2>Get In Touch With Us</h2>
            </div>
            <form action="#" className="contact-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-field p-relative c-name mb-8">
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-field p-relative c-name mb-8">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="contact-field p-relative c-email mb-8">
                    <input type="text" placeholder="Write here youremail" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="contact-field p-relative c-subject mb-8">
                    <input type="text" placeholder="I would like to discuss" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="contact-field p-relative c-message mb-8">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={10}
                      placeholder="Write comments"
                    ></textarea>
                  </div>
                  <div className="slider-btn mb-8">
                    <a
                      href="#"
                      className="btn ss-btn"
                      data-animation="fadeInRight"
                      data-delay=".8s"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96976.76857206452!2d-122.43277013717234!3d40.574187300475515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d291d63b4a202f%3A0x1f3358ec7b360f57!2sRedding%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1595490363344!5m2!1sen!2sin"
              width="100%"
              height="600"
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="w-full col-lg-12 col-md-12">
            <img
              src="img/meal/banner.png"
              alt="banner"
              className="img mt-100 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
