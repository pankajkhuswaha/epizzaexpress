"use client";
import { useUser } from "@/hooks/useAuth";
import React from "react";

const Profile = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <>Loading....</>;
  }
  return (
    <div>
      {user &&
        Object.entries(user).map(([key, value], i) => (
          <div key={i} className="flex gap-2">
            <h2 className="text-primary">{key} : </h2> <p>{value}</p>
          </div>
        ))}
    </div>
  );
};

export default Profile;
