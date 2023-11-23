import React from 'react'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";

const Errorpage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center mx-auto" >
                <iframe src="https://lottie.host/embed/760d371c-bb82-42a6-a1cd-284512cc8506/9XSxquGJ5H.json"></iframe>
                <Link to="/" ><button className="bg-orange-500 rounded-md font-semibold text-center mx-auto py-2 px-4 text-white flex items-center gap-3" ><IoHomeOutline /> Back to Home Page</button></Link>
            </div>
        </div>
    )
}

export default Errorpage