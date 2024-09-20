"use client";

import { useUser } from "@/hooks/useAuth";
import { Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const atAdmin = pathname.includes("admin");
  const [toggle, setToggle] = useState(false);
  const { data: user } = useUser();
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
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="header-area z-[99999]" style={{ position: "inherit" }}>
      {user && user.role == "admin" && (
        <Link
          href={"/admin"}
          className="fixed bottom-4 left-2 rounded bg-primary px-4 py-2 text-black"
        >
          Go To Dashboard
        </Link>
      )}
      <div id="header-sticky" className="menu-area z-[9999] p-0">
        <div className="container flex items-center justify-between p-2">
          <Link href="/" className="block">
            <Image
              src="/img/logo/logo.png"
              className="h-[60px] w-[220px] object-contain"
              width={300}
              height={100}
              alt="logo"
            />
          </Link>

          <div className="w-[80%] lg:hidden">
            <div
              onClick={() => setToggle(!toggle)}
              className="float-end cursor-pointer border-[1px] border-primary p-1"
            >
              {!toggle && <Menu size={25} color="var(--primary-color)" />}
              {toggle && <XIcon size={25} color="var(--primary-color)" />}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="main-menu pr-15 hidden text-right lg:flex">
              <ul>
                {menus.map(({ name, path }, i) => (
                  <li key={i} className="has-sub">
                    <Link href={path}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {!user && (
              <div className="hidden lg:block">
                <Link href="/auth/signup" className="btn ss-btn">
                  SignUp Now
                </Link>
              </div>
            )}

            {user && (
              <div className="hidden lg:block">
                <p className="btn ss-btn">✋ Hi {user.name}</p>
              </div>
            )}
          </div>
        </div>

        <div
          className={`main-menu z-50 w-full overflow-hidden transition-all duration-300 lg:hidden ${
            !toggle ? "h-0" : "h-[350px]"
          } pr-15 bg-secondary text-right`}
        >
          <ul>
            {menus.map(({ name, path }, i) => (
              <li
                onClick={() => setToggle(!toggle)}
                key={i}
                className="has-sub"
              >
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
          {!user && (
            <button
              onClick={() => {
                router.push("/auth/signup");
                setToggle(!toggle);
              }}
              className="btn my-4"
            >
              Signup Now
            </button>
          )}

          {user && (
            <div className="my-4">
              <p className="btn ss-btn">✋ Hi {user.name}</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
