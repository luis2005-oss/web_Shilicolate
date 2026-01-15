import { Outlet } from "react-router-dom";
import Header from "../components/organismos/Header";
import Footer from "../components/organismos/Footer";
import ProductosModal from "../components/organismos/ProductosModal";
import NosotrosModal from "../components/organismos/NosotrosModal";

function Layout() {
  return (
    <>
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />

      <ProductosModal />
      <NosotrosModal />
    </>
  );
}

export default Layout;
