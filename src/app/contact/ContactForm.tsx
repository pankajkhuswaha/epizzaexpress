"use client";
import PizzaLoder from "@/components/loader";
import fetchApi from "@/utils/axios";
import { failedAlert, successAlert } from "@/utils/helpers";
import { useMutation } from "@tanstack/react-query";
import React from "react";

const ContactForm = () => {
  const { mutateAsync: sendRequest,isPending } = useMutation({
    mutationKey: ["send-contact-request"],
    mutationFn: (data: any) => fetchApi("POST", "/api/contact", data),
    onSuccess: () =>
      successAlert(
        "Request sent",
        "Your request haas been sent successfully , we will connect to you so soon."
      ),
    onError: (err) => failedAlert("", err.message),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formdata = new FormData(event.target as HTMLFormElement);
    sendRequest(formdata).then(() => {
      (event.target as HTMLFormElement).reset();
    });
  };
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {isPending && <PizzaLoder text="Sending Request..."/>}
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-field p-relative c-name mb-8">
            <input
              required
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-field p-relative c-name mb-8">
            <input
              name="mobile"
              type="number"
              placeholder="Enter your mobile number"
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="contact-field p-relative c-email mb-8">
            <input
              name="email"
              type="text"
              placeholder="Write here your email"
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="contact-field p-relative c-subject mb-8">
            <input
              name="topic"
              type="text"
              placeholder="Enter the topic to discuss"
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="contact-field p-relative c-message mb-8">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              required
              placeholder="Write comments"
            ></textarea>
          </div>
          <div className="slider-btn mb-8">
            <button
              type="submit"
              className="btn ss-btn"
              data-animation="fadeInRight"
              data-delay=".8s"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
