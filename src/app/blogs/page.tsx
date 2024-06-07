import BreadCrumb from "@/components/BreadCrumb";
import { Metadata } from "next";
import BlogsGrid from "./Blogs";

export const metadata: Metadata = {
  title:
    "E Pizza Express Blog | Latest News, Recipes, and Tips on Pizza in Faridabad",
  description:
    "Welcome to the E Pizza Express blog! Stay updated with the latest news, delicious recipes, and expert tips about pizza. Discover new menu items, behind-the-scenes stories, and exciting promotions. Join our pizza-loving community in Faridabad and enhance your pizza knowledge.",
  keywords:
    "E Pizza Express blog, Pizza news Faridabad, Pizza recipes, Pizza tips, E Pizza Express updates, Pizza restaurant blog, New menu items, Behind the scenes pizza, Pizza promotions, Pizza community Faridabad, E Pizza Express stories",
};

const Blogs = () => {
  return (
    <section id="news-feed" className="">
      <BreadCrumb name="News Feed" path="blogs" />
      <BlogsGrid/>
    </section>
  );
};

export default Blogs;
