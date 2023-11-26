import React from 'react'
import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";

const Post = () => {
    return (
        <div className='border py-3 shadow-lg rounded-md px-2'>
            {/* header */}
            <div className='flex items-center pl-5 gap-2'>
                <img className='w-10 h-10 rounded-full' src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" alt="" />
                <div>
                    <h3 className='font-bold text-xl'>My name is</h3>
                    <p className='text-sm text-gray-500'>11/27/2023</p>
                </div>
            </div>
            <p className='pl-5 py-2 text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ad? Odio sapiente eaque esse labore quasi placeat nihil quo veniam!</p>
            <img src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" alt="" />
            {/* like || dislike */}
            <div className='flex pt-3 justify-evenly'>
                <button className='flex items-center gap-2 border px-3 rounded-md font-bold'><BiLike /> Like</button>
                <button className='flex items-center gap-2 border px-3 rounded-md font-bold'><AiOutlineDislike /> DisLike</button>
            </div>
        </div>
    )
}

export default Post