"use client"
import React from 'react'
import Image from 'next/image'
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import { useState } from 'react';

const InfoModal = () => {
    
}

const RecommendSection = () => {
    const [togglePopup, setTogglePopup] = useState(false)
  return (
    <div className='flex flex-col justify-start items-center w-full px-5 py-2'>
        <div className='flex justify-between w-full items-start mb-2'>
            <div>
                <div className='font-bold text-lg'>Recommended for you</div>
                <div>Based on your defensibility score</div>
            </div>
            <div className='underline text-lg'>More</div>
        </div>
        <div className='w-full bg-white rounded-2xl text-global-primary-black p-3 flex items-center mb-4 cursor-pointer'>
            <Image src="/images/briefcase.svg" alt="briefcase" width={50} height={50}/>
            <div className='ml-3'>
                <div className='font-bold text-lg'>Job career switch</div>
                <div>Currently, your defensibility score is low due to the job factor.</div>
                <BsArrowDownRightCircleFill className='float-right'/>
            </div>
        </div>
        <div className='w-full bg-white rounded-2xl text-global-primary-black p-3 flex items-center mb-4 cursor-pointer'>
            <Image src="/images/security-card.svg" alt="security-card" width={50} height={50}/>
            <div className='ml-3'>
                <div className='font-bold text-lg'>Boost to Enhanced Retirement Sum (ERS)</div>
                <div>Deposit your excess income into your CPF account to obtain higher payouts in your retirement.</div>
                <BsArrowDownRightCircleFill className='float-right'/>
            </div>
        </div>
        <div className='w-full bg-white rounded-2xl text-global-primary-black p-3 flex items-center cursor-pointer'>
            <Image src="/images/security-card.svg" alt="security-card" width={50} height={50}/>
            <div className='ml-3'>
                <div className='font-bold text-lg'>Supplementary Retirement Scheme (SRS)</div>
                <div>Currently, your defensibility score is low due to the job factor</div>
                <BsArrowDownRightCircleFill className='float-right'/>
            </div>
        </div>
    </div>
  )
}

export default RecommendSection