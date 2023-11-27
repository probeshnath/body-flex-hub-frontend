import React, { useEffect, useState } from 'react'
import Title from '../../../components/shared/BgTitle'
import usePublicAxios from '../../../hooks/usePublicAxios'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const AllSubscribers = () => {
    const [subscribers, setSubscribers] = useState(null)
    const publicAxios = usePublicAxios()

      // delete subscriber
      const handleDelete = (id) =>{
        // console.log("id",id)

        publicAxios.delete(`/newsletters/${id}`)
        .then(res => {
            // console.log(res.data) 
            // setSubscribers(res.data)
            if(res.data.deletedCount > 0){
                toast.success("Deleted Subscriber")
            }
        })
        .catch(error => {
            console.log(error)
            toast.error(error.message)
        })
    }

    useEffect(() => {
        publicAxios.get("/newsletters")
            .then(res => {
                // console.log(res.data) 
                setSubscribers(res.data)
            })
            .catch(error => {
                console.log(error)
                // toast.error(error.message)
            })
    }, [handleDelete])

    // console.log("first", subscribers)

  
    return (
        <div>
            <Title>All Subscribers</Title>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subscribers?.map((subs,inx) => (
                                <tr >
                                    <th>{inx + 1}</th>
                                    <td>{subs._id}</td>
                                    <td>{subs.name}</td>
                                    <td>{subs.email}</td>
                                    <td><MdDelete onClick={() => handleDelete(subs._id)} className='text-lg text-red-600 cursor-pointer' /></td>
                                </tr>
                            ))
                        }


                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default AllSubscribers