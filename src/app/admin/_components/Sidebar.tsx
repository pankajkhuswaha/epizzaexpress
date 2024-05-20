import React from "react";
import adminRoutes from "./routes";
import NavLink from "@/components/NavLink";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <aside
      className={`transition-transform duration-300 bg-gray-100 dark:bg-slate-800 w-full md:w-[300px] h-[calc(100vh-4rem)] z-10  ${
        isOpen
          ? "translate-x-0 fixed md:sticky top-16 "
          : "-translate-x-full fixed"
      }`}
    >
      {adminRoutes.map((route, i) => {
        return (
          <NavLink
            className="w-full p-2 pl-4 transition-all duration-150 text-gray-800 dark:text-gray-300 hover:bg-primary hover:text-white flex gap-3 "
            key={i}
            activeClassName="bg-primary text-white"
            href={route.path}
          >
            {route.icon} {route.name}
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;
