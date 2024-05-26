import React from 'react'
import { RiAccountCircleFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

const Settings = () => {
  return (
    <div className='mx-6 pt-12 flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center'>
        <RiAccountCircleFill size={100}/>
        <div className='font-semibold text-2xl'>
          My Profile
        </div>
      </div>
      <div className='flex flex-col mt-6 w-2/3'>
        <div className='p-2 flex justify-between items-center'>
          <span>Edit Retirement Profile</span>
          <MdKeyboardArrowRight size={30}/>
        </div>
        <div className='p-2 flex justify-between items-center'>
          <span>Notifications</span>
          <MdKeyboardArrowRight size={30}/>
        </div>
        <div className='p-2 flex justify-between items-center'>
          <span>Support</span>
          <MdKeyboardArrowRight size={30}/>
        </div>
        <div className='p-2 flex justify-between items-center'>
          <span>Contact Us</span>
          <MdKeyboardArrowRight size={30}/>
        </div>
        <div className='p-2 flex justify-between items-center'>
          <span>Terms and Conditions</span>
          <MdKeyboardArrowRight size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Settings