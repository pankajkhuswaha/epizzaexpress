import {
  HelpCircle,
  LayoutDashboard,
  ListOrdered,
  Network,
  User2Icon,
} from "lucide-react";

const adminRoutes = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <LayoutDashboard />,
  },
  {
    name: "Registered Users",
    path: "/admin/users",
    icon: <User2Icon />,
  },
  {
    name: "Contact us requests",
    path: "/admin/contact-reqs",
    icon: <HelpCircle />,
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: <ListOrdered />,
  },
  {
    name: "Blogs",
    path: "/admin/blogs",
    icon: <Network />,
  },
];
export default adminRoutes;
