import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import usePublicAxios from '../../../hooks/usePublicAxios';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = () => {
    const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState('')
    const {user} = useAuth();
    const elements = useElements()
    const axiosPublic = usePublicAxios() 
    const totalPrice = 40

    useEffect(()=>{

        axiosPublic.post("/create-payment-intent",{price: totalPrice})
        .then(res =>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })


    },[totalPrice,axiosPublic])

    const handleSubmit = async(event) =>{
        event.preventDefault()

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)

        if(card == null){
            return;
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            toast.error(error.message)
            console.log("payment error", error)
        }else{
            console.log('payment method',paymentMethod)
        }
        // confirem payment 
        const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
          console.log("confirm error")
        }else{
          console.log("payment intent", paymentIntent)
          if(paymentIntent.status === "succeeded"){
            console.log('transaction id', paymentIntent.id)

            // now save the payment in the database
            const payment = {
              email: user.email,
              price: totalPrice,
              date: new Date(),
              
            }
          }
        }


    }

  return (
    <form className='py-3' onSubmit={handleSubmit}>
           <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
    
      <button  type="submit" disabled={!stripe || !clientSecret} className='bg-orange-600 py-1 px-3 rounded-md mt-2 text-white'>Confirm</button>
      
    </form>
  )
}

export default CheckoutForm