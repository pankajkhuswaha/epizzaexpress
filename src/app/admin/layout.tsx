"use client";
import { ChildrenProps } from "@/types";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import { useState } from "react";

const AdminLayout = ({ children }: ChildrenProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex min-h-[calc(100vh-4rem)] relative">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="container mx-auto p-2">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
