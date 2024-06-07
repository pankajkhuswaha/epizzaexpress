"use client";

import BlogCard from "@/components/BlogCard";
import { useFecthBlogs } from "@/hooks/useblogs";

const BlogsGrid = () => {
  const { data: blogs,isLoading } = useFecthBlogs();

  if(isLoading){
    return <center className="container my-20">
        <h1>Loading Blogs...</h1>
    </center>
  }

  return (
    <div className="grid gap-4 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 container h-fit">
      {blogs?.map((blog, i) => (
        <BlogCard key={i} {...blog} />
      ))}
    </div>
  );
}

export default BlogsGrid