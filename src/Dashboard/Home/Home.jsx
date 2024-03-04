import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import StudentInfo from '../StudentInfo/StudentInfo';
import Update from '../Update/Update';
import { Outlet } from 'react-router-dom';

const Home = () => {
  

  return (
    <div className='flex w-screen h-screen'>
      <Sidebar />
      <div className='w-full flex flex-col flex-grow'>
        <Header  />
        {/* <Main/> */}
      <Outlet/>
      </div>
    </div>
  );
};

export default Home;
