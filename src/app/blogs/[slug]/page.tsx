/* eslint-disable @next/next/no-img-element */
"use client";
import BreadCrumb from "@/components/BreadCrumb";
import { BlogProp } from "@/types";
import fetchApi from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
import { CalendarDaysIcon, User2Icon } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetail = () => {
  const { slug } = useParams();
  const {} = useQuery({
    queryKey: ["fetch-single-blog", slug],
    queryFn: () => fetchApi<BlogProp>("GET", `/blogs/${slug}`),
  });
  const blog = {
    slug: "details",
    title: "lorem20",
    category: "Food",
    image: "/img/blog/img(01).png",
    content: "<p>Hi There how are you</p>",
    createdAt: new Date().toLocaleString(),
  };
  const { title ,content} = blog;
  return (
    <section id="blog-detail">
      <BreadCrumb name="Blog Detail" path={`blogs/${slug}`} />
      <div className="blog-details-wrap container">
        <div className="bsingle__post-thumb mb-30">
          <img src="/img/blog/inner_b1.jpg" alt="" />
        </div>
        <div className="meta__info">
          <div className="flex items-center gap-4 my-4">
            <div className="flex items-center gap-4">
              <CalendarDaysIcon color="var(--primary-color)" /> 4th June 2020
            </div>
            <div className="flex items-center gap-4">
              <User2Icon color="var(--primary-color)" />
              by Zcube
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
