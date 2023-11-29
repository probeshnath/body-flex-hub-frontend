import React, { useEffect, useState } from 'react'
import Title from '../../../components/shared/BgTitle'
import usePublicAxios from '../../../hooks/usePublicAxios'
import { FaRegEye } from "react-icons/fa";
import Swal from 'sweetalert2';

const AppliedTrainers = () => {
    const publicAxios = usePublicAxios();
    const [applied, setApplied] = useState(null)

    


    // accept or reject
    const appliedHandler = (user) => {
        // sweet aleart
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make trainer!"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.put(`/addTrainer/${user.email}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                              Swal.fire({
                                title: `${user.name} has been added as a Trainer`,
                                text: "make trainer Done",
                                icon: "success"
                              });
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
            if (result.isDismissed) {
                console.log("normal user")
            }
            console.log(result)
        });
    }

    useEffect(() => {
        publicAxios.get("/appliedTrainers")
            .then(res => {
                // console.log(res.data)
                setApplied(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [appliedHandler])




    return (
        <div>
            <Title>Applied Trainers</Title>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>available_day</th>
                            <th>available_week</th>
                            <th>Detail/ Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applied?.map((user, inx) => (
                                <tr>
                                    <th>{inx + 1}</th>
                                    <th><img className='w-8 h-8' src={user.img} alt="" /></th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.available_day}</td>
                                    <td>{user.available_week}</td>
                                    <td onClick={() => appliedHandler(user)}><FaRegEye className='text-lg text-orange-600 cursor-pointer' /></td>
                                </tr>
                            ))
                        }


                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default AppliedTrainers