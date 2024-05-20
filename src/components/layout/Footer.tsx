"use client";

import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
  const atAdmin = pathname.includes("admin");
  if (atAdmin) return;
  return <div>Footer</div>;
};

export default Footer;
