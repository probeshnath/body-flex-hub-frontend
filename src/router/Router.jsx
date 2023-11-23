import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/ErrorPage/Errorpage";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/Home/HomePage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement: <Errorpage />,
        children: [
            {
                index:true,
                element: <HomePage />
            }
        ]
    }
])

export default router