import React from 'react';


const Update = () => {
  return (
    <div className=''>
      <div className="flex justify-center mt-[6rem] mr-[4rem]">
        <div className="w-full lg:w-2/3">
          <h2 className="text-center mb-3">Create Student</h2>
          <form>
            <div className="mb-3 flex items-center">
              <label className="w-24 text-right mr-4">Name</label>
              <input name='name' defaultValue="" className="form-control w-64 form-input border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your full Name" />
            </div>
            <div className="mb-3 flex items-center">
              <label className="w-24 text-right mr-4">Email</label>
              <input name='email' defaultValue="" className="w-64 form-control form-input border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
            </div>
            <div className="mb-3 flex items-center">
              <label className="w-24 text-right mr-4">Phone Number</label>
              <input name='phone' className="w-64 form-control form-input border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Phone" />
            </div>
            <div className="mb-3 flex items-center">
              <label className="w-24 text-right mr-4">Email Number</label>
              <input name='emailNumber' defaultValue="" className="w-64 form-control form-input border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Email Number" />
            </div>
            <div className="mb-3 flex items-center">
              <label className="w-24 text-right mr-4">Date</label>
              <input name='date' type='date' className="w-64 form-input border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Date" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[50%] mt-6">
              
                <button type="submit" className="btn btn-primary btn-sm bg-[#FFA500] p-4">Save</button>
              
              <button type="button" className="btn btn-secondary btn-sm bg-[#FFA500]">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
