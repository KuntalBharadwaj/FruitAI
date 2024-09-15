import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import Home from "../page/Home";
import Faqs from "../page/Faqs";
import AboutPage from "../page/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },

    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/FAQs",
        element: <Faqs/>
    },
    {
        path: "/about",
        element: <AboutPage/>
    }
])

export default router