import React, { useEffect, useState } from 'react'
import TitleSection from '../../../components/shared/TitleSection'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useNavigate, useParams } from 'react-router-dom';
import usePublicAxios from '../../../hooks/usePublicAxios';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);



const Payment = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const publicAxios = usePublicAxios()
    const { id } = useParams()

    
    useEffect(() => {
        publicAxios.get(`/cartClass/${id}`)
            .then(res => {
                console.log(res.data)
                setData(res.data);
                
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <TitleSection title={"Payment Page"} description={"Please payment activate your next steps"} />

            <div className=' mt-10'>
                <div className='bg-slate-50 font-bold   py-5 px-3'>
                    <h2 className='text-xl'>Trainer Name: {data?.trainer?.name}</h2>
                    <h3 className=''>Slot: {data?.cls?.slot_name}</h3>
                    <p>Package Name: {data?.status}</p>
                    <p>Price: {data?.update_price}</p>
                    <p>Name: {data?.buyer_name}</p>
                    <p>Email: {data?.buyer_email}</p>

                    <div>
                        <Elements stripe={stripePromise}>
                            {/*  */}
                            <CheckoutForm data={data} price={data?.update_price} />
                        </Elements>
                    </div>

                    {/* <button className='bg-orange-600 py-1 px-3 rounded-md mt-2 text-white'>Confirm</button> */}

                </div>
            </div>
        </div>
    )
}

export default Payment