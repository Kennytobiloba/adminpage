import React from 'react'
import usd  from"../../assets/usd-square.png"

const Main = () => {
  return (
    <div className='flex-grow p-6 overflow-auto '>
        <div className='grid lg:grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
        <div className='rounded-[8px] h-48 col-span-1 p-4 bg-blue-50 '>
            <div className='flex gap-2 flex-col'>
            <i className="fa-solid fa-graduation-cap md:text-[48px] text-[20px]"></i>
            <h5 className='font-[400px] text-[14px]'>Student</h5>
            </div>
            <h1 className='md:text-[30px] text-[20px] font-[700] text-right mt-6 '>243</h1>

        </div>
        <div className='rounded-[8px] h-48 col-span-1 p-4  bg-blue-50'>
            <div className='flex gap-2 flex-col'>
            <i className="fa-regular fa-bookmark md:text-[48px] text-[20px]"></i>
            <h5 className='font-[400px] text-[14px]'>Student</h5>
            </div>
            <h1 className='md:text-[30px] text-[20px] font-[700] text-right mt-6'>13</h1>

        </div>
        <div className='rounded-[8px]  h-48 col-span-1   p-4 bg-blue-50'>
            <div className='flex gap-2 flex-col'>
            <img src={usd} alt="" className='md:w-[48px] w-[20px]' />
            <h5 className='font-[400px] text-[14px]'>Payments</h5>
            </div>
            <h1 className='md:text-[30px] text-[20px] font-[700] text-right mt-6'>INR 556,000</h1>

        </div>

        <div className='rounded-[8px]  h-48 col-span-1 p-4  bg-blue-50'>
            <div className='flex gap-2 flex-col'>
            <i className="fa-regular fa-user md:text-[48px] text-[20px]"></i>
            <h5 className='font-[400px] text-[14px]'>User</h5>
            </div>
            <h1 className='md:text-[30px] text-[20px] font-[700] text-right mt-6'>3</h1>

        </div>

        
        <div className='rounded-[8px] h-48 col-span-1 p-4  bg-blue-50'>
            <div className='flex gap-2 flex-col'>
            <i className="fa-regular fa-user md:text-[48px] text-[20px]"></i>
            <h5 className='font-[400px] text-[14px]'>User</h5>
            </div>
            <h1 className='md:text-[30px] text-[20px] font-[700] text-right mt-6'>3</h1>

        </div>

        

        </div>

    </div>
  )
}

export default Main