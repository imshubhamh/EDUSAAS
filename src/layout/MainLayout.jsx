import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />


      <main className="flex-1">
        <Outlet />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default MainLayout;
