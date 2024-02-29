import React from 'react'
import Main from '../Main/Main'

const Header = () => {
  
  return (
    <div className=''>
        <div className='flex items-center flex-shrink-0 h-16 px-8 border-b justify-between'>
        <i className="fa-solid fa-caret-up"></i>

<div className='flex flex-row gap-6 items-center'>
<div className='h-[37px] rounded-[8px] border-[1px] w-[212px]'>
<div className='flex justify-between p-2'>
<input type="text" className='w-[57px] h-[17px] text-[14px] font-[400]' placeholder='Search' />
<i className="fa-solid fa-magnifying-glass"></i>
</div>              
 </div>
 <i className="fa-solid fa-bell"></i>
</div>
 </div>
 {/* <Main/> */}
</div>


  )
}

export default Header