import React, { useState } from 'react'
import line  from"../../assets/Line1.png"
import person  from"../../assets/person.png"
import usd  from"../../assets/usd-square.png"
import file  from"../../assets/file-chart-line.png"
import settings from"../../assets/sliders-v-square.png"


const Sidebar = ({ mainSection, StundentIn, infoUpdate}) => {
   
  return (
    <div className='flex flex-col w-56 border-r border-gray-300'>
        <div className='bg-gray-100  flex flex-col flex-grow p-4  '>
           <div className='mx-auto text-center mt-4 flex flex-col justify-center items-center px-[0.5rem]'>
           <div className='flex justify-center sm:gap-2 gap-0  '>
        <div className=' flex items-center justify-center'>
          <img src={line} alt="" /> 
        </div>
       <h1 className=' text-black lg:text-[20px] md:text-[28px] sm:text-[24px] text-[16px]  font-[700]  text-center'>CRUD OPERATIONS</h1>
      </div>
      <div className='mt-8'>
        <img src={person} alt="" className='rounded-[50%] sm:h-full sm:w-full w-[80px] h-[80px]' />

       </div>
       <h4 className='sm:text-[17px] text-[14px] leading-[21px] text-left font-[700] mt-6 text-black'>Karthi Madesh</h4>
       <h5 className='sm:text-[14px] text-[12px] leading-[17px] text-left font-[400] mt-4 text-[#FFA500]' >Admin</h5>
       
       <div className='mt-[4rem]'>
        <div  onClick={() =>  mainSection()}  className=' sm:w-[193px] w-[130px] cursor-pointer h-[41px] bg-[#FFA500] hover:bg-gray-100 rounded-[4px] p-2 mx-auto ' >
           <div className='flex md:gap-4 gap-2 justify-center items-center'>
           <i className="fa-solid fa-house text-[14px]"></i>
           <h5 className='md:text-[14px] text-[12px] font-[400] text-black'>Home</h5>
           </div>
        </div>
        <div className=' sm:w-[193px] w-[130px] mx-auto cursor-pointer h-[41px] hover:bg-[#FFA500] bg-gray-100 rounded-[4px] p-2 mt-4'>
           <div className='flex gap-4 justify-center items-center'>
           <i className="fa-regular fa-bookmark text-[14px]"></i>
           <h5 className='md:text-[14px] text-[12px] font-[400] text-black'>Course</h5>
           </div>
        </div>
        <div onClick={() => {infoUpdate(),StundentIn(); }}  className=' sm:w-[193px]  w-[130px] mx-auto cursor-pointer h-[41px] hover:bg-[#FFA500] bg-gray-100 rounded-[4px] p-2 mt-4'>
           <div className='flex gap-4 justify-center items-center ' >
           <i className="fa-solid fa-graduation-cap text-[14px]"></i>
           <h5 className='md:text-[14px] text-[12px] font-[400] text-black'>Students</h5>
           </div>
        </div>
        <div className=' sm:w-[193px]  w-[130px] mx-auto cursor-pointer h-[41px] hover:bg-[#FFA500] bg-gray-100 rounded-[4px] p-2 mt-4'>
           <div className='flex gap-4 justify-center items-center'>
          <img src={usd} alt="" className='w-[14px]' />
           <h5 className='md:text-[14px] text-[12px] font-[400] text-black'>Payment</h5>
           </div>
        </div>
        <div className=' sm:w-[193px]  w-[130px] mx-auto cursor-pointer h-[41px] hover:bg-[#FFA500] bg-gray-100 rounded-[4px] p-2 mt-4'>
           <div className='flex gap-4 justify-center items-center'>
           <img src={file} alt="" className='w-[14px]' />
           <h5 className='md:text-[14px] text-[12px] font-[400] text-black'>Report</h5>
           </div>
        </div>
        <div className=' sm:w-[193px]  w-[130px] mx-auto cursor-pointer h-[41px] hover:bg-[#FFA500] bg-gray-100 rounded-[4px] p-2 mt-4'>
           <div className='flex gap-4 justify-center items-center'>
           <img src={settings} alt="" className='w-[14px]' />
           <h5 className='md:text-[14px] text-[12px] font-[400] text-black'>Settings</h5>
           </div>
        </div>
        <div className='sm:w-[193px]  w-[130px] mx-auto cursor-pointer h-[41px] hover:bg-[#FFA500] bg-gray-100 rounded-[4px] p-2 mt-[6rem]'>
           <div className='flex gap-4 justify-center items-center'>
           <h5 className='md:text-[14px] text-[12px] font-[400] text-black'>Logout</h5>
           <i className="fa-solid fa-arrow-right-from-bracket text-[14px]"></i>
           </div>
        </div>


        
       </div>



           </div>
        </div>



    </div>
  )
}

export default Sidebar