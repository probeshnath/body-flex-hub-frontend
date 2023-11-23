import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../pages/ErrorPage/Errorpage";

const router = createBrowserRouter([
    {
        path:"/",
        element:"HI didi",
        errorElement: <Errorpage />
    }
])

export default router