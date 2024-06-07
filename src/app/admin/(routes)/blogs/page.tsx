"use client";
import { useDeleteBlog, useFecthBlogs } from "@/hooks/useblogs";
import { BlogProp } from "@/types";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import {
  Edit2Icon,
  EyeIcon,
  Trash2Icon,
  TrashIcon,
  ViewIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlogList = () => {
  const { data: blogs } = useFecthBlogs();
  const router = useRouter();
  const { mutate: deleteBlog } = useDeleteBlog();
  const columns: ColDef[] = [
    {
      headerName: "Sr. No",
      field: "index",
      cellRenderer: (data: any) => {
        return data.rowIndex + 1;
      },
    },
    {
      headerName: "Date",
      field: "createdAt",
      cellRenderer: ({ data }: { data: BlogProp }) => {
        return new Date(data.createdAt).toLocaleString("en-us");
      },
    },
    {
      headerName: "Blog Title",
      field: "title",
    },
    {
      headerName: "Paragraph",
      field: "paragraph",
    },
    {
      headerName: "Image",
      field: "image",
      cellRenderer: ({ data }: { data: BlogProp }) => {
        return (
          <img
            src={data.image}
            alt="image"
            className="border rounded size-20"
          />
        );
      },
    },
    {
      headerName: "Action",
      field: "_id",
      cellRenderer: ({ data }: { data: BlogProp }) => {
        return (
          <div className="flex gap-4 items-center py-2">
            <EyeIcon className="text-sky-600 text-4xl cursor-pointer" />
            <Edit2Icon
              onClick={() => router.push(`/admin/blogs/add?update=${data.slug}`)}
              className="text-blue-600 text-4xl cursor-pointer"
            />
            <Trash2Icon
              onClick={() => deleteBlog(data._id)}
              className="text-red-600 text-4xl cursor-pointer"
            />
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="flex my-2 mb-4 justify-between gap-4 items-center">
        <h1 className="text-primary text-2xl md:text-4xl">List of All Blogs</h1>
        <Link href={"/admin/blogs/add"} className="btn">
          Add New Blog
        </Link>
      </div>
      <div className="ag-theme-quartz-auto-dark" style={{ height: 500 }}>
        <AgGridReact rowData={blogs} columnDefs={columns} />
      </div>
    </>
  );
};

export default BlogList;
