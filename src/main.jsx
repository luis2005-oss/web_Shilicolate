import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Reconocimientos from "./pages/Reconocimientos";
import Trabajadores from "./pages/Trabajadores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "reconocimientos", element: <Reconocimientos /> },
      { path: "trabajadores", element: <Trabajadores /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
