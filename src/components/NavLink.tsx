"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavlinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  activeClassName?: string;
}

const NavLink = (props: NavlinkProps) => {
  const { href, className, activeClassName, children, ...rest } = props;
  const pathname = usePathname();
  const isActive = pathname == href && pathname.includes(href);
  const newClassName = isActive ? `${className} ${activeClassName}` : className;

  return (
    <Link href={href} className={newClassName} {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
