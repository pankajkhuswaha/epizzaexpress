"use client";
import {
  useAddBlog,
  useFecthSingleBlog,
  useUpdateBlog,
} from "@/hooks/useblogs";
import { BlogProp } from "@/types";
import fetchApi from "@/utils/axios";
import { showError } from "@/utils/helpers";
import { useMutation } from "@tanstack/react-query";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BlogForm = () => {
  const _id = useSearchParams().get("update") || undefined;
  const { data: blog } = useFecthSingleBlog(_id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: blog });

  const { mutate: addBlog } = useAddBlog();
  const { mutate: updateBlog } = useUpdateBlog();
  useEffect(() => {
    reset(blog);
  }, [blog, reset]);

  const onSubmit = (data: any) => {
    if (blog) {
      updateBlog({ id: blog._id, data });
      return;
    }
    addBlog(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className=" rounded mb-4 w-full">
        <h2 className="text-2xl text-center text-primary md:text-4xl font-bold my-2 md:my-4">
          {blog ? "Update" : "Create New"} Blog
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            id="title"
            placeholder="Enter your Blog title"
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {showError(errors?.title?.message as string)}
        </div>

        {/* Paragraph */}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="paragraph"
          >
            Paragraph
          </label>
          <textarea
            {...register("paragraph", { required: "Paragraph is required" })}
            id="paragraph"
            placeholder="Enter short description about blog"
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {showError(errors?.paragraph?.message as string)}
        </div>

        {/* Category */}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            {...register("category", { required: "Category is required" })}
            id="category"
            placeholder="Enter blog category"
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {showError(errors?.category?.message as string)}
        </div>

        {/* Content */}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            {...register("content", { required: "Content is required" })}
            id="content"
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {showError(errors?.content?.message as string)}
        </div>

        {/* Image */}
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            {...register("image", { required: "Image URL is required" })}
            id="image"
            placeholder="Enter the url of image"
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {showError(errors?.image?.message as string)}
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="btn">
            {blog?"Update":"Add"} Blog
          </button>
        </div>
      </form>
    </>
  );
};

export default BlogForm;
