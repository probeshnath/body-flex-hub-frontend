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
import ClassesPage from "../pages/Classes/ClassesPage";
import Forums from "../pages/Forums/Forums";
import DashboardLayout from "../Layout/DashboardLayout";
import MainDashboard from "../pages/Dasboard/MainDashboard";
import AllSubscribers from "../pages/Dasboard/AllSubscribers/AllSubscribers";
import AllTrainers from "../pages/Dasboard/AllTrainers/AllTrainers";
import AppliedTrainers from "../pages/Dasboard/AppliedTrainers/AppliedTrainers";
import ManageSlots from "../pages/Dasboard/ManageSlots/ManageSlots";
import ManageMember from "../pages/Dasboard/ManageMember/ManageMember";
import AddNewForum from "../pages/Dasboard/AddNewForum/AddNewForum";
import AddNewClass from "../pages/Dasboard/AddNewClass/AddNewClass";
import ActivityLog from "../pages/Dasboard/ActivityLog/ActivityLog";
import ProfileSettings from "../pages/Dasboard/ProfileSettings/ProfileSettings";
import RecommendedClasses from "../pages/Dasboard/RecommendedClasses/RecommendedClasses";
import MyProfile from "../pages/MyProfile/MyProfile";

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
            },
            {
                path: "classes",
                element: <ClassesPage />
            },
            {
                path: "forums",
                element: <Forums />
            },
            {
                path: "myProfile",
                element: <MyProfile />
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
    },
    {
        path:"/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <Errorpage />,
        children:[
            {
                index: true,
                element: <MainDashboard />
            },
            {
                path:"/dashboard/allSubscribers",
                element: <AllSubscribers />
            },
            {
                path:"/dashboard/allTrainers",
                element: <AllTrainers />
            },
            {
                path:"/dashboard/appliedTrainers",
                element: <AppliedTrainers />
            },
            {
                path:"/dashboard/manageSlots",
                element: <ManageSlots />
            },
            {
                path:"/dashboard/manageMember",
                element: <ManageMember />
            },
            {
                path:"/dashboard/addNewForum",
                element: <AddNewForum />
            },
            ,
            {
                path:"/dashboard/addNewClass",
                element: <AddNewClass />
            },
            {
                path:"/dashboard/activityLog",
                element: <ActivityLog />
            },
            {
                path:"/dashboard/profileSettings",
                element: <ProfileSettings />
            },
            {
                path:"/dashboard/recommendedClasses",
                element: <RecommendedClasses />
            },

        ]
    }
])

export default router