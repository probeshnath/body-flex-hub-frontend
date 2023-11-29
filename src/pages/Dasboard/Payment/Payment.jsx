import React from 'react'
import TitleSection from '../../../components/shared/TitleSection'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);



const Payment = () => {
    return (
        <div>
            <TitleSection title={"Payment Page"} description={"Please payment activate your next steps"} />

            <div className=' mt-10'>
                <div className='bg-slate-50 font-bold   py-5 px-3'>
                    <h2 className='text-xl'>Trainer Name: nsfnfsfsfsf dfddfdf</h2>
                    <h3 className=''>Slot: ldmldmddma csd</h3>
                    <p>Package Name: silver</p>
                    <p>Price: 200</p>
                    <p>Name: gdssd sffsf</p>
                    <p>Email: kssfsfsfsfs</p>

                    <div>
                        <Elements stripe={stripePromise}>
                            {/*  */}
                            <CheckoutForm />
                        </Elements>
                    </div>

                    {/* <button className='bg-orange-600 py-1 px-3 rounded-md mt-2 text-white'>Confirm</button> */}

                </div>
            </div>
        </div>
    )
}

export default Payment