/* eslint-disable @next/next/no-img-element */
"use client";

import { BlogProp } from "@/types";
import { CalendarHeart, User } from "lucide-react";
import Link from "next/link";

const BlogCard = (blog: BlogProp) => {
  const { image, createdAt, category, slug, title, paragraph } = blog;
  return (
    <div className="single-post">
      <div className="blog-thumb cursor-pointer">
        <Link href={`/blogs/${slug}`}>
          <img src={image} alt="img" className="h-[180px] object-contain" />
        </Link>
      </div>
      <div className="blog-content">
        <div className="category-btn uppercase">{category}</div>
        <div className="meta my-4 text-lg flex gap-4">
          <div className="flex gap-2 items-center">
            <CalendarHeart color="var(--primary-color)" />{" "}
            {new Date(createdAt).toLocaleDateString("en-us")}
          </div>
          <div className="flex gap-2 items-center">
            <User color="var(--primary-color)" /> By Admin
          </div>
        </div>
        <Link href={`/blogs/${slug}`}>
          <h4 className="font-semibold capitalize line-clamp-2 hover:text-primary">
            {title}
          </h4>
          <p className="line-clamp-6 hover:text-gray-400">{paragraph}</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
