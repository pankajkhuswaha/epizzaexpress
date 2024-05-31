"use client";

import { Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const atAdmin = pathname.includes("admin");
  const [toggle, setToggle] = useState(false);
  if (atAdmin) return;
  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="header-area">
      <div id="header-sticky" className="menu-area z-[9999]">
        <div className="container flex justify-between items-center p-2">
          <Link href="/" className="block">
            <Image
              src="/img/logo/logo.png"
              width={100}
              height={80}
              alt="logo"
            />
          </Link>

          <div className="w-[80%] lg:hidden">
            <div
              onClick={() => setToggle(!toggle)}
              className="border-[1px] border-primary p-1 cursor-pointer float-end"
            >
              {!toggle && <Menu size={25} color="var(--primary-color)" />}
              {toggle && <XIcon size={25} color="var(--primary-color)" />}
            </div>
          </div>

          <div className="flex justify-between gap-4 items-center">
            <div className="main-menu hidden lg:flex text-right pr-15">
              <ul>
                {menus.map(({ name, path }, i) => (
                  <li key={i} className="has-sub">
                    <Link href={path}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <Link href="/auth/signup" className="btn ss-btn">
                SignUp Now
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`main-menu overflow-hidden lg:hidden z-50 w-full transition-all duration-150 ${
            !toggle ? "h-0 " : "h-[260px]"
          } text-right pr-15 bg-secondary`}
        >
          <ul>
            {menus.map(({ name, path }, i) => (
              <li key={i} className="has-sub">
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
