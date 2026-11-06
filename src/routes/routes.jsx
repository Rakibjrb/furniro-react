import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home.page";
import MainLayout from "../components/MainLayout";
import ShopPage from "../pages/Shop.page";
import AboutPage from "../pages/About.page";
import ContactPage from "../pages/Contact.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
