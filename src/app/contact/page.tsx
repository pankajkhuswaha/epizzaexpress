import BreadCrumb from "@/components/BreadCrumb";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "E Pizza Express | Reach Out to Us",
  description:
    "Get in touch with E Pizza Express in Faridabad. Whether you have a question, feedback, or need assistance, we are here to help. Contact us via phone, email, or visit our restaurant. We look forward to hearing from you!",
  keywords:
    "E Pizza Express contact, Contact pizza restaurant Faridabad, Get in touch E Pizza Express, Pizza restaurant contact details, Contact us Faridabad, E Pizza Express phone, E Pizza Express email, Visit E Pizza Express, Customer service Faridabad",
};

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
            <ContactForm/>
          </div>
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.4168677378301!2d77.28217954498282!3d28.36882844209638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdea701108b19%3A0xff8907ad8ce7fa!2sGali%20Number%206!5e0!3m2!1sen!2sin!4v1717604192673!5m2!1sen!2sin"
              width="600"
              height="600"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="w-full col-lg-12 col-md-12">
            <Image
              src="/img/banner/offer.png"
              alt="banner"
              className="img mt-100 mx-auto"
              width={1000}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
