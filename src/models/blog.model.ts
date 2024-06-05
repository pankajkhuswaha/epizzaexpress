import { BlogProp } from "@/types";
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema<BlogProp>(
  {
    slug: {
      type: String,
      require: true,
      unique: true,
    },
    title: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Blog =
  mongoose.models.blog || mongoose.model<BlogProp>("blog", blogSchema);
export default Blog;
