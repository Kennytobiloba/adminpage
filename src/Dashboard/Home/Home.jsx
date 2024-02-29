import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import StudentInfo from '../StudentInfo/StudentInfo';
import Update from '../Update/Update';

const Home = () => {
  const [section, setSection] = useState(<Main />);

  const mainSection = () => {
    setSection(<Main />);
  };
  const StundentIn  = () =>{
    setSection(<StudentInfo/>)
  }
  const infoUpdate  = () =>{
    setSection(<Update/>)
  }

  return (
    <div className='flex w-screen h-screen'>
      <Sidebar mainSection={mainSection} StundentIn={StundentIn} infoUpdate={infoUpdate} />
      <div className='w-full flex flex-col flex-grow'>
        <Header  />
        {section}
       
      </div>
    </div>
  );
};

export default Home;
