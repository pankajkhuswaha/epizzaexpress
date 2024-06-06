import BlogCard from "@/components/BlogCard";
import BreadCrumb from "@/components/BreadCrumb";
import { BlogProp } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "E Pizza Express Blog | Latest News, Recipes, and Tips on Pizza in Faridabad",
  description:
    "Welcome to the E Pizza Express blog! Stay updated with the latest news, delicious recipes, and expert tips about pizza. Discover new menu items, behind-the-scenes stories, and exciting promotions. Join our pizza-loving community in Faridabad and enhance your pizza knowledge.",
  keywords:
    "E Pizza Express blog, Pizza news Faridabad, Pizza recipes, Pizza tips, E Pizza Express updates, Pizza restaurant blog, New menu items, Behind the scenes pizza, Pizza promotions, Pizza community Faridabad, E Pizza Express stories",
};

const Blogs = () => {
  const dummy: BlogProp[] = [
    {
      slug: "details",
      title: "lorem20",
      category: "Food",
      image: "/img/blog/img(01).png",
      content: "fsdf",
      createdAt: new Date().toLocaleString(),
    },
    {
      slug: "details",
      title: "lorem20",
      category: "Food",
      image: "/img/blog/img(01).png",
      content: "fsdf",
      createdAt: new Date().toLocaleString(),
    },
    {
      slug: "details",
      title: "lorem20",
      category: "Food",
      image: "/img/blog/img(01).png",
      content: "fsdf",
      createdAt: new Date().toLocaleString(),
    },
    {
      slug: "details",
      title: "lorem20",
      category: "Food",
      image: "/img/blog/img(01).png",
      content: "fsdf",
      createdAt: new Date().toLocaleString(),
    },
  ];
  return (
    <section id="news-feed" className="">
      <BreadCrumb name="News Feed" path="blogs" />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 container h-fit">
        {dummy.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
