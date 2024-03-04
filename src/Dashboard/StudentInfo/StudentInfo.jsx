import React from 'react';
import person from "../../assets/person.png";
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userdelete } from '../../UserReducer'



const StudentInfo = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch() 
    const handleDelect = (id) => {
      dispatch(userdelete({id : id}))

    }
  return (
    <div>
      <div className='px-10 py-10 bg-gray-100'>
        <div className='flex justify-between bg-gray-100 '>
          <h1 className='font-[700] text-[22px] leading-[26px] text-black'>Students List</h1>
          <div>
            <Link to="update" className=' p-4 font-[400] text-center text-[14px] h-[44px] rounded-[4px] w-[199px] bg-[#FFA500] '>ADD NEW STUDENT</Link>
          </div>
        </div>
        <div className="overflow-x-auto">
                    <table id="studentTable" className="table-auto w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Email Number</th>
                                <th className="px-4 py-2">Date Of Admission</th>
                                <th className="px-4 py-2">Edit</th>
                                <th className="px-4 py-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="bg-white hover:bg-gray-100 mb-2">
                                    <td className="border px-4 py-2">{user.name}</td>
                                    <td className="border px-4 py-4">{user.email}</td>
                                    <td className="border px-4 py-4">{user.phone}</td>
                                    <td className="border px-4 py-4">{user.emailno}</td>
                                    <td className="border px-4 py-4">Date Of Admission</td>
                                    <td className="border px-4 py-4"><Link to={user.id.toString()}><i className="fa-solid fa-pen"></i></Link></td>
                                    <td className="border px-4 py-4"><i onClick={() =>  handleDelect(user.id)} className="fa-solid fa-trash"></i></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default StudentInfo;
