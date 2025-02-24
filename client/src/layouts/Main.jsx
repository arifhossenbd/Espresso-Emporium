import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Banner from "../component/Banner/Banner";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;