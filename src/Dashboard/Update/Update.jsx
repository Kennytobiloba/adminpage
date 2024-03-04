import React from 'react';
import { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../UserReducer';
import { Link, useNavigate } from 'react-router-dom';



const Update = () => {
  const users = useSelector((state) => state.users);
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [phone , setPhone] = useState("")
  const [emailno , setEmailNo] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser({id:users[users.length - 1].id + 1, name, email, phone, emailno}))
    navigate("/home/schoolinfo")


  }

  return (
    <div className=' mt-20 bg-gray-100'>
      <div className="">
        <div className=" p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <h2 className="text-center  block mb-2 font-bold text-gray-600">Create Student</h2>
          <form onSubmit={handleSubmit} >
            <div className="">
              <label className=" block mb-2 font-bold text-gray-600 ">Name</label>
              <input name='name' onChange={e => setName(e.target.value)} className="form-control   border border-gray-300 shadow p-3 w-full rounded mb- form-input " placeholder="Enter your full Name" />
            </div>
            <div className="">
              <label className=" block mb-2 font-bold text-gray-600">Email</label>
              <input name='email' onChange={e => setEmail(e.target.value)} className="border border-gray-300 shadow p-3 w-full rounded mb- form-control form-input " placeholder="Enter your email" />
            </div>
            <div className="">
              <label className=" block mb-2 font-bold text-gray-600">Phone Number</label>
              <input name='phone'  onChange={e => setPhone(e.target.value)} className="border border-gray-300 shadow p-3 w-full rounded mb- form-control form-input " placeholder="Enter your Phone" />
            </div>
            <div className="">
              <label className=" block mb-2 font-bold text-gray-600">Email Number</label>
              <input name='emailno' onChange={e => setEmailNo(e.target.value)}className="border border-gray-300 shadow p-3 w-full rounded mb- form-control form-input" placeholder="Enter your Email Number" />
            </div>
            <div className="">
              <label className=" block mb-2 font-bold text-gray-600">Date</label>
              <input name='date' type='date' className="form-input border border-gray-300 shadow p-3 w-full rounded mb-" placeholder="Enter Date" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[50%] mt-6">
              
                <button type="submit" className="btn btn-primary btn-sm bg-[#FFA500] p-4">Save</button>
              
                <Link to="schoolinfo">
                            <button type="button" className="btn p-4 btn-secondary btn-sm bg-[#FFA500]">Cancel</button>
                            </Link>
            </div>
          </form>
          <main>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Update;
