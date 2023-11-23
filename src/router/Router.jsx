import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/ErrorPage/Errorpage";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/Home/HomePage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

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
    },
    {
        path:"/signIn",
        element: <SignIn />
    },
    {
        path:"/signUp",
        element:<SignUp />
    }
])

export default router