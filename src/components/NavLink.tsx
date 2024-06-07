"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavlinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  activeClassName?: string;
  defaultClassName?: string;
}

const NavLink = (props: NavlinkProps) => {
  const {
    href,
    className,
    defaultClassName,
    activeClassName,
    children,
    ...rest
  } = props;
  const pathname = usePathname();
  const isActive = pathname == href && pathname.includes(href);
  const newClassName = `${className} ${
    isActive ? activeClassName : defaultClassName
  }`;

  return (
    <Link href={href} className={newClassName} {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
