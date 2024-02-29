import React from 'react';
import person from "../../assets/person.png";
import { Link } from 'react-router-dom';


const StudentInfo = () => {
  return (
    <div>
      <div className='px-10 py-10 bg-gray-100'>
        <div className='flex justify-between bg-gray-100 '>
          <h1 className='font-[700] text-[22px] leading-[26px] text-black'>Students List</h1>
          <div>
            <Link to="/update" className=' p-4 font-[400] text-center text-[14px] h-[44px] rounded-[4px] w-[199px] bg-[#FFA500] '>ADD NEW STUDENT</Link>
          </div>
        </div>
        <table className="w-full border-collapse my-4">
          <thead>
            <tr>
              <th className="py-2 px-14 bg-gray-100 text-[12px] font-[600]">Name</th>
              <th className="py-2 bg-gray-100 text-[12px] font-[600] text-left">Email</th>
              <th className="py-2 bg-gray-100 text-[12px] font-[600] text-left">Phone</th>
              <th className="py-2 bg-gray-100 text-[12px] font-[600] text-left">Email Number</th>
              <th className="py-2 bg-gray-100 text-[12px] font-[600] text-left">Date Of Admission</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 flex items-center gap-8"><img src={person} alt="" className='w-[65px] h-[55px] rounded-[8px] object-cover' /> <p>John Doe</p></td>
              <td className="py-2 px-2 text-left">keny</td>
              <td className="py-2 px-2 text-left">08130197838</td>
              <td className="py-2 px-2 text-left">olaatunbikehinde@gmail.com</td>
              <td className="py-2 px-2 text-left">1234567305477760</td>
              <td className="py-2 px-2 text-left"><i className="fa-solid fa-pen"></i></td>
              <td className="py-2 px-2 text-left"><i className="fa-solid fa-trash"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentInfo;
