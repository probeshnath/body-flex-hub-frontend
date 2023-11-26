import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/ErrorPage/Errorpage";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/Home/HomePage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import TrainerPage from "../pages/TrainerPage/TrainerPage";
import TrainerDetails from "../pages/TrainerDetals/TrainerDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "gallery",
                element: <GalleryPage />
            },
            {
                path: "trainers",
                element: <TrainerPage />
            },
            {
                path: "trainers/:id",
                element: <TrainerDetails />
            },
        ]
    },
    {
        path: "/signIn",
        element: <SignIn />
    },
    {
        path: "/signUp",
        element: <SignUp />
    }
])

export default router