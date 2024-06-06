import BreadCrumb from '@/components/BreadCrumb';
import About from "./About";
import Testimonials from "./Testimonials";
import IntroVideo from "./IntroVideo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About E Pizza Express | Best Pizza Restaurant in Faridabad",
  description:
    "Learn more about E Pizza Express, the best pizza restaurant in Faridabad. Our story, mission, and commitment to delivering delicious, freshly made pizzas. Discover why our customers love us and what makes our pizzas special. Join us for an unforgettable dining experience.",
  keywords:
    "About E Pizza Express, Best pizza restaurant Faridabad, Our story E Pizza Express, Pizza restaurant mission, About us E Pizza Express, Why choose E Pizza Express, Pizza place history Faridabad, E Pizza Express values, Pizza restaurant information",
};

const AboutUs = () => {
  return (
    <section id="about" className="about-area about-p p-relative">
      <BreadCrumb name="About Us" path="about" />
      <About />
      <Testimonials />
      <IntroVideo />
    </section>
  );
};

export default AboutUs;