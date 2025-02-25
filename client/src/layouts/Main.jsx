import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Banner from "../component/Banner/Banner";

const Main = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Banner />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
