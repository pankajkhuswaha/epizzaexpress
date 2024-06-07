/* eslint-disable @next/next/no-img-element */
"use client";
import BreadCrumb from "@/components/BreadCrumb";
import { useFecthSingleBlog } from "@/hooks/useblogs";
import { BlogProp } from "@/types";
import fetchApi from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
import { CalendarDaysIcon, User2Icon } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetail = () => {
  const { slug } = useParams();
  const {data:blog,isLoading} = useFecthSingleBlog(slug as string)

  if (isLoading) {
    return (
      <center className="container my-20">
        <h1>Loading Blog...</h1>
      </center>
    );
  }
  if(!blog){
    return
  }

  const { title ,content,image, createdAt} = blog;
  return (
    <section id="blog-detail">
      <BreadCrumb name="Blog Detail" path={`blogs/${slug}`} />
      <div className="blog-details-wrap container">
        <div className="bsingle__post-thumb mb-30">
          <img src={image} alt="blog-image" />
        </div>
        <div className="meta__info">
          <div className="flex items-center gap-4 my-4">
            <div className="flex items-center gap-4">
              <CalendarDaysIcon color="var(--primary-color)" /> {new Date(createdAt).toDateString()}
            </div>
            <div className="flex items-center gap-4">
              <User2Icon color="var(--primary-color)" />
              by Admin
            </div>
          </div>
        </div>
        <div className="details__content pb-10">
          <h2>{title}</h2>
          {/* <iframe srcDoc={content}></iframe> */}
          <div dangerouslySetInnerHTML={{__html:content}}></div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
