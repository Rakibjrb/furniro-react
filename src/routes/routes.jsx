import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home.page";
import MainLayout from "../components/MainLayout";
import ShopPage from "../pages/Shop.page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/shop",
                element: <ShopPage />
            },
            {
                path: "/about",
                element: <div className="w-full h-screen text-4xl text-center">This is About Page</div>
            },
            {
                path: "/contact",
                element: <div className="w-full h-screen text-4xl text-center">This is Contact Page</div>
            }
        ]
    }
]);

export default router;