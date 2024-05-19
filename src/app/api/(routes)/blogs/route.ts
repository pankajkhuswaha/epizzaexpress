import { NextRequest, NextResponse } from "next/server";
import Blog from "../../_models/blog.model";
import { slugify } from "../../../../../utils";
export const GET = async () => {
  const blogs = await Blog.find();
  return NextResponse.json(blogs);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const blog = { ...body, slug: slugify(body.title) };
  const newBlog = await Blog.create(blog);
  return NextResponse.json({
    message: "Blog added sucessfully.",
    blog: newBlog,
  });
};
