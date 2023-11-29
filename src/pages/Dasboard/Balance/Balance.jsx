import BgTitle from '../../../components/shared/BgTitle'
import { BsCurrencyDollar } from "react-icons/bs";

const Balance = () => {
  return (
    <div>
        <BgTitle>Balance</BgTitle>
        <div className='flex justify-center gap-5'>

            <div className='bg-orange-200 py-5 rounded-md px-4'>
                <h3 className='text-xl font-semibold'>Total Remaining Balance</h3>
                <h4 className='flex items-center justify-center text-2xl'><BsCurrencyDollar /> 320</h4>
            </div>
            <div className='bg-blue-200 py-5 rounded-md px-4'>
                <h3 className='text-xl font-semibold'>Total Payment</h3>
                <h4 className='flex items-center justify-center text-2xl'><BsCurrencyDollar /> 320</h4>
            </div>
        </div>
    </div>
  )
}

export default Balance