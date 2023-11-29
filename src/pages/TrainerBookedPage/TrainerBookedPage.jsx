import React, { useEffect, useState } from 'react'
import TitleSection from '../../components/shared/TitleSection'
import { FaDollarSign } from "react-icons/fa6";
import { SiVerizon } from "react-icons/si";
import { Link, useNavigate, useParams } from 'react-router-dom';
import usePublicAxios from '../../hooks/usePublicAxios';

const TrainerBookedPage = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const publicAxios = usePublicAxios()
    const { id } = useParams()

    const silverData = ["Cardio Fusion", "Sculpt & Tone Express", "Core Crusher Challenge", "PowerFit Circuit", "Body Blast Bootcamp"]
    const goldData = ["Warrior Workout", "Lean & Mean", "Functional Fitness Fiesta"]
    const diamondData = ["HIIT Havoc","Flex & Flow Yoga","Total Body Transformation","Strength Surge","Spin & Sweat","Kickbox Cardio"]


    const bookStatus = (status,classData,price) => { 

        const updateData = {
            status: status,
            classData: classData,
            price: price
        }
        // console.log(updateData)

        publicAxios.put(`/cartClass/${id}`,updateData)
        .then(res => {
            console.log(res.data)
            // setData(res.data);
            if(res.data.modifiedCount > 0){
              navigate(`/dashboard/payment/${id}`)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        publicAxios.get(`/cartClass/${id}`)
            .then(res => {
                // console.log(res.data)
                setData(res.data);
                
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className='py-10'>
            <div className='max-w-7xl mx-auto'>
                <TitleSection title={"Trainer Booked Page"} description={"We are Happy To Connected With you"} />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 px-3  gap-3'>
                    {/* silver */}
                    <div className="border-2 px-3 rounded-md py-4">
                        <h2 className='text-4xl text-center'>Silver </h2>
                        <h3 className='flex items-center text-2xl justify-center my-4'><FaDollarSign className='text-3xl' /> {data?.cls?.price} <span className='text-base'> /month</span></h3>
                        <div>
                            {
                                silverData.map((item, inx) => <p key={inx} className='flex items-center gap-2'><SiVerizon className='text-green-600' /> {item} </p>)
                            }

                        </div>
                        <button onClick={() => bookStatus("silver",silverData,50)} className='bg-orange-500 w-full rounded-md font-bold hover:bg-blue-700 hover:text-white py-1 mt-4'>Join Now</button>
                    </div>
                    {/* Diamond */}
                    < div className="border-2 px-3 rounded-md py-4">
                        <h2 className='text-4xl text-center'>Diamond </h2>
                        <h3 className='flex items-center text-2xl justify-center my-4'><FaDollarSign className='text-3xl' /> {data?.cls?.price + 50} <span className='text-base'> /month</span></h3>
                        {
                                diamondData.map((item,inx) =><p key={inx} className='flex items-center gap-2'><SiVerizon className='text-green-600' /> {item} </p>)
                            }
                        {/* <Link to={"/dashboard/payment"}>  */}
                        <button  onClick={() => bookStatus("diamond",diamondData,100)} className='bg-orange-500 font-bold py-1  w-full hover:bg-blue-700 hover:text-white rounded-md mt-4'>Join Now</button>
                       
                    </div>
                    {/* gold pace */}
                    <div className="border-2 rounded-md px-3 py-4">
                        <h2 className='text-4xl text-center'>Gold </h2>
                        <h3 className='flex items-center text-2xl justify-center my-4'><FaDollarSign className='text-3xl' /> {data?.cls?.price + 20} <span className='text-base'> /month</span></h3>
                        <div>
                            {
                                goldData.map((item, inx) => <p key={inx} className='flex items-center gap-2'><SiVerizon className='text-green-600' /> {item} </p>)
                            }
                        </div>
                        <button onClick={() => bookStatus("gold",goldData,70)} className='bg-orange-500 w-full font-bold py-1 hover:bg-blue-700 hover:text-white  rounded-md mt-4'>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerBookedPage