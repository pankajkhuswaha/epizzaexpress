"use client";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const atAdmin = pathname.includes("admin");
  if (atAdmin) return;

  return <div>Header</div>;
};

export default Header;
