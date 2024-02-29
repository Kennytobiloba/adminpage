import React, { useState } from 'react'
import line  from"../../assets/Line1.png"


 
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password:"",
  })
  const [errors, setErrors] = useState({});
   function handleChange(e){
    setValues({...values, [e.target.name]: e.target.value})

   }
   function handleSubmit (e) {
    e.preventDefault()
    validation(values)

   }
  
   const validation = (values) => {
    let errors = {}
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!values.email.trim()) {
      errors.email = "Email required"
      
     }
     else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    
    
    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    setErrors(errors);

    
    if (Object.keys(errors).length === 0) { 
      console.log("Login successful");
      window.location.href = "/home";
      
    }

   }
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-[#FFA500] '>

      <div className=' flex flex-col max:w-[70%]  h-[590px] bg-white px-10 py-12  drop-shadow-xl rounded-[20px]'>
      <div className='flex justify-center gap-2 '>
        <div className=' flex items-center justify-center'>
          <img src={line} alt="" />
       
          
        </div>
       <h1 className=' text-black lg:text-[32px] md:text-[28px] sm:text-[24px] text-[19px]  font-[700]  text-center'>CRUD OPERATIONS</h1>

      </div>

      <h4 className=' leading-[22px] md:text-[22px] text-[16px] text-center md:mt-8 mt-2 font-[600] text-black '>Sign In</h4>
      <h5 className='text-center md:text-[14px] text-[12px] mt-4 text-gray-400'>Enter your credentials to access your account</h5>
      <form action="" className='mt-8' onSubmit={handleSubmit}>
        <label htmlFor="" className='font-[400] leading-[17px] text-left md:text-[14px] text-[12px] md:mb-4 mb-2 text-gray-400' >Email</label>
        <input type="email" className='text-gray-400 w-full mb-6 h-[44px] border-[1px] mt-4 rounded-[4px] p-2 font-[40px] md:text-[12px] text-[10px]' placeholder='Enter your password' value={values.email} name='email'  onChange={handleChange} />
        {errors.email && <p className="text-red-500 text-[12px]">{errors.email}</p>}

        <label htmlFor="" className='font-[400]  leading-[17px] text-left md:text-[14px] text-[12px] md:mb-4 mb-2 text-gray-400' >Password</label> <br />
        <input type="password" className='text-gray-400 w-full mb-6 h-[44px] border-[1px] mt-4 rounded-[4px] p-2 font-[40px] md:text-[12px] text-[10px]' placeholder='Enter your password'value={values.password} name='password'  onChange={handleChange}  />
        {errors.password && <p className="text-red-500 text-[12px]" >{errors.password}</p>}

        
        <button className='w-full rounded-[4px] bg-[#FFA500] h-[44px] md:px-2 mt-6 text-ceter text-gray-400 font-[400px] md:text-[14px] text-[12px]'>
        SIGN IN
        </button>

        <div className='mt-6 text-center '>
          <span className='text-[14px] font-[400px] text-gray-400  '>Forgot your password?<a href="" className=' text-[#FFA500] font-[600px]'> Reset Password</a></span>
        </div>

        
      </form>
  

      </div>
    

    </div>
  )
}

export default Login