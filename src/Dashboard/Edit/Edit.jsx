import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../../UserReducer';


const Edit = () => {
  const {id} = useParams()
  const users = useSelector((state) => state.users)
  const existingUser = users.filter(f => f.id == id)
  const {name, email, phone, emailno} = existingUser[0] 
    const [studentName, setStudentName] = useState(name);
    const [studentEmail, setStudentEmail] = useState(email);
    const [studentPhone, setStudentPhone] = useState(phone);
    const [studentEmailNo, setStudentEmailNo] = useState(emailno);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(
            updateUser({
                id: id,
                name: studentName,
                email: studentEmail,
                phone: studentPhone,
                emailno: studentEmailNo,
            })
           
        );
        navigate('/home/schoolinfo')
    };

    return (
        <div className="mt-20 bg-gray-100">
            <div className="">
                <div className="p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                    <h2 className="block mb-2 font-bold text-gray-600">Edit Student Info</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-2">
                            <label className="block mb-2 font-bold text-gray-600">Name</label>
                            <input
                                name="name"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                className="form-control   border border-gray-300 shadow p-3 w-full rounded mb- form-input"
                                placeholder="Enter your full Name"
                            />
                        </div>
                        <div className=" mb-2">
                            <label className="block mb-2 font-bold text-gray-600">Email</label>
                            <input
                                name="email"
                                value={studentEmail}
                                onChange={(e) => setStudentEmail(e.target.value)}
                                className="form-control   border border-gray-300 shadow p-3 w-full rounded mb- form-input"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 font-bold text-gray-600">Phone Number</label>
                            <input
                                name="phone"
                                value={studentPhone}
                                onChange={(e) => setStudentPhone(e.target.value)}
                                className="form-control   border border-gray-300 shadow p-3 w-full rounded mb- form-input"
                                placeholder="Enter your Phone"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 font-bold text-gray-600">Email Number</label>
                            <input
                                name="emailno"
                                value={studentEmailNo}
                                onChange={(e) => setStudentEmailNo(e.target.value)}
                                className="form-control   border border-gray-300 shadow p-3 w-full rounded mb- form-input"
                                placeholder="Enter your Email Number"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 font-bold text-gray-600">Date</label>
                            <input
                                name="date"
                                type="date"
                                className="form-control   border border-gray-300 shadow p-3 w-full rounded mb- form-input"
                                placeholder="Enter Date"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[50%] mt-6">
                            <button type="submit" className="btn btn-primary btn-sm bg-[#FFA500] p-4">Save</button>
                            <Link to="/home">
                            <button type="button" className="btn p-4 btn-secondary btn-sm bg-[#FFA500]">Cancel</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
