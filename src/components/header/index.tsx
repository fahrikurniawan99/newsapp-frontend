import { Link, NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

export default function Header() {
  return (
    <>
      <nav className="flex items-center px-4 sm:px-16 lg:px-32 py-5 shadow bg-white">
        <Link to={"/"} className="font-bold text-2xl">
          NewsApp
        </Link>
        <ul className="flex w-full ml-5 items-center justify-end gap-3">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                cn("text-gray-500", isActive && "text-gray-700")
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/history"}
              className={({ isActive }) =>
                cn("text-gray-500", isActive && "text-gray-700")
              }
            >
              Histories
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
