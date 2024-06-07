import { LogOutIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 z-50 p-2 md:py-4 px-2 sticky top-0 w-full h-16 shadow-sm dark:shadow-gray-600">
      <nav className="flex items-center justify-between h-full px-2">
        <div className="flex items-center">
          <button className="text-2xl  mr-4" onClick={toggleSidebar}>
            <MenuIcon />
          </button>
          <Link href={"/"} className="text-xl font-semibold">E Pizza Express</Link>
        </div>
        <div className="flex gap-2 items-center">
          <p className="whitespace-nowrap hidden md:block">Hi user !!</p>
          {/* <DarkMode /> */}
          <button
            title="Logout"
            className="rounded px-2 text-white py-1 transition-all duration-150 bg-red-500 hover:bg-red-700 flex gap-2 "
          >
            <LogOutIcon /> <span className="hidden sm:block">Logout</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
