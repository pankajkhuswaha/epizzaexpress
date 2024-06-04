"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadCrumbProps {
  name: string;
  path: string;
}

const BreadCrumb = ({ name, path = "conatct" }: BreadCrumbProps) => {
  const pathname = usePathname();
  return (
    <div
      className="relative h-[200px] md:h-[400px] flex items-center justify-center"
      style={{ background: "url(/img/bg/test-bg.png)" }}
    >
      <center>
        <h1 className="capitalize text-2xl md:text-6xl">{name}</h1>
        <div className="flex gap-4 text-xl my-4 text-gray-500 capitalize hover:text-primary w-fit">
          <Link href={"/"}>Home {">"}</Link>
          {path.split("/").map((ele, i) => {
            return (
              <Link
                key={i}
                href={`/${ele}`}
                className={`${pathname == "/" + path && "text-primary"}`}
              >
                {ele} {i + 1 != path.split("/").length && ">"}
              </Link>
            );
          })}
        </div>
      </center>
    </div>
  );
};

export default BreadCrumb;
