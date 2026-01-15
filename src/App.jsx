// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import Reconocimientos from './pages/Reconocimientos';
import Trabajadores from './pages/Trabajadores';
// Si ya tienes estas páginas:
// import Historia from './pages/nosotros/Historia';
// import MisionVision from './pages/nosotros/MisionVision';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,          element: <Home /> },
      { path: 'reconocimientos', element: <Reconocimientos /> },
      { path: 'trabajadores',    element: <Trabajadores /> },
      // Ejemplos adicionales:
      // { path: 'nosotros/historia',     element: <Historia /> },
      // { path: 'nosotros/mision-vision', element: <MisionVision /> },
      // { path: 'producto/:productoId',   element: <ProductoDetail /> }, // si lo implementas después
    ],
  },
  // Opcional: página 404
  {
    path: '*',
    element: <h1 style={{ textAlign: 'center', padding: '100px' }}>404 - Página no encontrada</h1>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;