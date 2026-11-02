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
            }
        ]
    }
]);

export default router;