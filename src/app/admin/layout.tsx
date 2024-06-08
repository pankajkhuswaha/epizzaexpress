"use client";
import { ChildrenProps } from "@/types";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import { useState } from "react";
import useWidth from "@/hooks/useWidth";
import { useUser } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AdminLayout = ({ children }: ChildrenProps) => {
  const isMobile = useWidth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMobile ? false : true);
  const { data: user, isLoading } = useUser();
  const router = useRouter();
  if (isLoading) {
    return (
      <center className="my-20 flex items-center justify-center">
        <h1>Loading...</h1>
      </center>
    );
  }

  if (user && user.role == "admin") {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex min-h-[calc(100vh-4rem)] relative">
          <Sidebar
            setOpen={() => setIsSidebarOpen(!isSidebarOpen)}
            isOpen={isSidebarOpen}
          />
          <main className="container mx-auto px-2 md:p-6">{children}</main>
        </div>
      </div>
    );
  } else {
    toast.warning("You are not allowed to visit this page")
    return router.push("/auth/login");
  }
};

export default AdminLayout;
