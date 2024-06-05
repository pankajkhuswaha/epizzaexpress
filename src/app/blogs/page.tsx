import BlogCard from "@/components/BlogCard";
import BreadCrumb from "@/components/BreadCrumb";
import { BlogProp } from "@/types";
import React from "react";

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
