/* eslint-disable @next/next/no-img-element */
"use client";
import menuData, { MenuTypes } from "@/constant/menu";
import React, { useState } from "react";

const Menus = () => {
    const [activeTab, setActiveTab] = useState<MenuTypes>("combo");
  return (
    <div className="container text-white mt-2 lg:mt-20">
      <div
        id="menu-category-bar"
        className="flex mb-4 gap-2 overflow-y-auto items-center"
      >
        {Object.keys(menuData).map((category) => (
          <div
            key={category}
            className={`w-fit flex-[1] whitespace-nowrap px-4 p-2 text-center cursor-pointer rounded-full transition-all duration-150 ${
              activeTab === category
                ? "bg-primary text-gray-800"
                : "bg-gray-800"
            }`}
            onClick={() => setActiveTab(category as MenuTypes)}
          >
            {category.replace(/([A-Z])/g, " $1").toUpperCase()}
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-10 my-10">
        {menuData[activeTab].map((item, index) => (
          <div
            key={index}
            className="flex max-lg:flex-col justify-between lg:items-center mb-4 rounded"
          >
            {item.img && (
              <div className="meal-img">
                <img
                  src={item.img}
                  alt="img"
                  className="w-24 h-24 object-cover rounded"
                />
              </div>
            )}
            <div className="meal-content flex-1 lg:px-4">
              <a className="hover:text-primary" href="#">
                {item.name}
              </a>
              <p>{item.description}</p>
            </div>
            <div className="border-b-2 border-dotted lg:hidden my-4"></div>
            <div className="meal-price text-right max-lg:my-5">
              <a href="#" className="text-yellow-500 font-bold">
                {item.price}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menus