"use client";
import fetchApi from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
import {
  BellIcon,
  HelpCircle,
  NetworkIcon,
  UserIcon
} from "lucide-react";
import Link from "next/link";

const AdminDashboard = () => {
  const { data: stats } = useQuery({
    queryKey: ["fetch-admin-data"],
    queryFn: () => fetchApi<Record<string, number>>("GET", "/api/admin"),
  });
  const cards = [
    {
      name: "Registered Users",
      count: stats?.users || 0,
      icon: <UserIcon />,
      path: "/admin/users",
    },
    {
      name: "Conatct Us Req.",
      count: stats?.contactus || 0,
      icon: <HelpCircle />,
      path: "/admin/contact-reqs",
    },
    {
      name: "Blogs",
      count: stats?.blogs || 0,
      icon: <NetworkIcon />,
      path: "/admin/blogs",
    },
    {
      name: "Notifications",
      count: stats?.notifications || 0,
      icon: <BellIcon />,
      path: "/admin/notifications",
    },
  ];
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-2">
        {cards.map(({ name, count, icon, path }, i) => {
          return (
            <Link
              key={i}
              href={path}
              className="rounded-xl cursor-pointer transition-all duration-150 hover:shadow-lg p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800 dark:shadow-gray-800"
            >
              <div className="">
                <p className="font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  {name}
                </p>
                <h1 className="text-2xl md:text-4xl text-primary tracking-widest">{count}</h1>
              </div>
              <p className="border-2 border-gray-300 dark:border-gray-400 rounded-full size-10 flex items-center justify-center text-4xl text-primary mt-4">
                {icon}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AdminDashboard;
