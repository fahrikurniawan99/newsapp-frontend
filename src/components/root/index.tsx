import { Outlet } from "react-router-dom";
import Header from "../header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-16 lg:px-32">
        <Outlet />
      </div>
    </>
  );
}
