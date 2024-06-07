import useWidth from "@/hooks/useWidth";
import adminRoutes from "./routes";
import NavLink from "@/components/NavLink";
interface sidebarPros {
  isOpen: boolean;
  setOpen: () => void;
}

const Sidebar = ({ isOpen, setOpen }: sidebarPros) => {
  const isMobile = useWidth();
  return (
    <aside
      className={`transition-transform duration-300 bg-gray-100 dark:bg-slate-800 w-[75%] md:w-[300px] h-[calc(100vh-4rem)] z-10  ${
        isOpen
          ? "translate-x-0 fixed md:sticky top-16 "
          : "-translate-x-full fixed"
      }`}
    >
      {adminRoutes.map((route, i) => {
        return (
          <div onClick={isMobile ? setOpen : undefined} key={i}>
            <NavLink
              className="w-full p-2 pl-3 transition-all duration-150 hover:bg-primary hover:dark:text-gray-800 flex gap-3"
              defaultClassName=" text-gray-800 dark:text-gray-300"
              activeClassName="bg-primary text-gray-800"
              href={route.path}
            >
              {route.icon} {route.name}
            </NavLink>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
