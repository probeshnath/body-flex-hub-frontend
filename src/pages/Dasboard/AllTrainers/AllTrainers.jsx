import React, { useEffect, useState } from 'react'
import Title from '../../../components/shared/BgTitle'
import usePublicAxios from '../../../hooks/usePublicAxios'

const AllTrainers = () => {
    const [trainers, setTrainers] = useState(null)
    const publicAxios = usePublicAxios()

    useEffect(() => {
        publicAxios.get("/trainers")
            .then(res => {
                // console.log(res.data)
                setTrainers(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <Title>All Trainers</Title>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainers?.map((trainer,inx) => (
                                <tr>
                                    <th>{inx + 1}</th>
                                    <td>{trainer.name}</td>
                                    <td>{trainer.email}</td>
                                    <td>{trainer.role}</td>
                                    <td>Canada</td>
                                    <td>12/16/2020</td>
                                    <td>Blue</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default AllTrainers