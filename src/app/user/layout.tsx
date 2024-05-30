"use client";

import { ChildrenProps } from "@/types";
import Link from "next/link";

const UserDashboard = ({ children }: ChildrenProps) => {
  return (
    <div className="flex gap-2 min-h-[90vh]">
      <div className="flex-[2] border">
        <Link href="/user">Profile</Link>
        <Link href="/user/posts">Posts</Link>
      </div>
      <div className="flex-[9] border">{children}</div>
    </div>
  );
};

export default UserDashboard;
