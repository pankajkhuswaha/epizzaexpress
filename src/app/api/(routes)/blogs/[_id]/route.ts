import { NextRequest, NextResponse } from "next/server";
import { Params } from "@/types";
import Blog from "@/models/blog.model";

export const GET = async (_req: NextRequest, { params }: Params) => {
  const slug = params._id;
  const blog = await Blog.findOne({ slug });
  return NextResponse.json(blog);
};

export const PUT = async (req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const body = await req.json();
  await Blog.findByIdAndUpdate(_id, body);
  return NextResponse.json({ message: "Blog is updated sucessfully." });
};

export const DELETE = async (_req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const blog = await Blog.findByIdAndDelete(_id);
  if (blog) {
    return NextResponse.json({ message: "Blog deleted Successfully." });
  }
  return NextResponse.json(
    { message: "Blog of this id is not found." },
    { status: 404 }
  );
};
