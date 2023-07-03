import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/root";
import HomePage from "./components/home/home-page";
import HistoryPage from "./components/history/history-page";

// pages
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
    ],
  },
]);
