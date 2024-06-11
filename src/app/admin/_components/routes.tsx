import {
  BellIcon,
  BellPlusIcon,
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
    name: "Blogs",
    path: "/admin/blogs",
    icon: <Network />,
  },
  {
    name: "Add New Blog",
    path: "/admin/blogs/add",
    icon: <ListOrdered />,
  },
  {
    name: "Notifications",
    path: "/admin/notifications",
    icon: <BellIcon />,
  },
  {
    name: "Add New Notification",
    path: "/admin/notifications/add",
    icon: <BellPlusIcon />,
  },
];
export default adminRoutes;
