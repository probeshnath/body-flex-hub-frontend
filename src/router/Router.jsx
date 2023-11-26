import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/ErrorPage/Errorpage";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/Home/HomePage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import TrainerPage from "../pages/TrainerPage/TrainerPage";
import TrainerDetails from "../pages/TrainerDetals/TrainerDetails";
import BeTrainer from "../pages/TrainerDetals/BeTrainer";
import TrainerBookedPage from "../pages/TrainerBookedPage/TrainerBookedPage";

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
            {
                path: "beTrainer",
                element: <BeTrainer />
            },
            {
                path: "trainerBooked",
                element: <TrainerBookedPage />
            }
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