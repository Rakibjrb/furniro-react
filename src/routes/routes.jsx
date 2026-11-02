import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home.page";
import MainLayout from "../components/MainLayout";

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
                path: "/test",
                element: <div>Test Page</div>
            }
        ]
    }
]);

export default router;