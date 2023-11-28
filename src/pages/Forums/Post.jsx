import React, { useState } from 'react'
import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import useAuth from '../../hooks/useAuth'
import usePublicAxios from '../../hooks/usePublicAxios';

const Post = ({forum}) => {
    const [like, setLike] = useState(forum?.like)
    const [disLike, setdisLike] = useState(forum?.disLike)
    const {user} = useAuth()
    // console.log("first", user?.email)
    const publicAxios = usePublicAxios()
    
    const haddleLike = (e) =>{
        e.preventDefault()
        setLike(like + 1)

        const post = {
            like: like + 1,
            disLike: disLike
        }

        publicAxios.patch(`/updateFourm/${forum._id}`,post)
        .then(res =>{
            console.log(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const haddleDisLike = (e) =>{
        e.preventDefault()
        setdisLike(disLike + 1)

        const post = {
            like: like ,
            disLike: disLike + 1
        }

        publicAxios.patch(`/updateFourm/${forum._id}`,post)
        .then(res =>{
            console.log(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }
   
    return (
        <div className='border py-3 shadow-lg rounded-md px-2'>
            {/* header */}
            <div className='flex items-center pl-5 gap-2'>
                <img className='w-10 h-10 rounded-full' src={forum?.profile_pic} alt="" />
                <div>
                    <h3 className='font-bold capitalize text-xl'>{forum?.name}</h3>
                    <p className='text-xs text-gray-500'>{forum?.date}</p>
                </div>
            </div>
            <p className='pl-5 py-2 text-gray-600 text-sm'>{forum?.caption}</p>
            <img className='w-full h-52 object-cover' src={forum?.body_pic} alt="" />
            {/* like || dislike */}
            <div className='flex pt-3 justify-evenly'>
                <button onClick={haddleLike} className='flex items-center gap-2 border px-3 rounded-md font-bold'><BiLike /> {like}</button>
                <button onClick={haddleDisLike} className='flex items-center gap-2 border px-3 rounded-md font-bold'><AiOutlineDislike /> {disLike}</button>
            </div>
        </div>
    )
}

export default Post