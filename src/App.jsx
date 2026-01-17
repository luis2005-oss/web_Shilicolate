import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";

// Pages
import Home from "./pages/Home";
import Reconocimientos from "./pages/Reconocimientos";
import Trabajadores from "./pages/Trabajadores";
import Contacto from "./pages/Contacto";
import Shilibombones from "./pages/productos/Shilibombones";
import Chocotejas from "./pages/productos/Chocotejas";
import ChocolateComestible from "./pages/productos/ChocolateComestible";
import ChocolateEnChapa from "./pages/productos/ChocolateEnChapa";
import ChocolateEnCaja from "./pages/productos/ChocolateEnCaja";
import Historia from "./pages/nosotros/Historia";
import MisionVision from "./pages/nosotros/MisionVision";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "reconocimientos", element: <Reconocimientos /> },
      { path: "trabajadores", element: <Trabajadores /> },
      { path: "contacto", element: <Contacto/> },
      { path: "producto/shilibombones", element: <Shilibombones /> },
      { path: "producto/chocotejas", element: <Chocotejas /> },
      { path: "producto/chocolate-comestible", element: <ChocolateComestible /> },
      { path: "producto/chocolate-en-chapa", element: <ChocolateEnChapa /> },
      { path: "producto/chocolate-en-caja", element: <ChocolateEnCaja /> },
      { path: "nosotros/historia", element: <Historia /> },
      { path: "nosotros/mision-vision", element: <MisionVision /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
