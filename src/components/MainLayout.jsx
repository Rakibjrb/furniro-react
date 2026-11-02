import { Outlet } from "react-router";
import Navbar from "./ui/shared/Navbar";
import Footer from "./ui/shared/Footer";

const MainLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}
export default MainLayout;