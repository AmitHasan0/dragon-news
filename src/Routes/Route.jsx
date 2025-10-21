import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../Pages/HomePage";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  { path: "/auth", element: <h2>Authentication Layout</h2> },
  { path: "/news", element: <h2>News Layout</h2> },
  { path: "/*", element: <h2>error-404</h2> },
]);

export default router;
