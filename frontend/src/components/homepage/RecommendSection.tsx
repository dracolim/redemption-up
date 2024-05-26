"use client"
import React from 'react'
import Image from 'next/image'
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import { useState } from 'react';
import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from 'next/link';

type ModalProps = {
    cause: string,
    suggestion: string, 
    isNewJob: boolean
}



const RecommendSection = () => {
    const [togglePopup, setTogglePopup] = useState(false)
    const [cause, setCause] = useState("")
    const [suggestion, setSuggestion] = useState("")
    const [isNewJob, setIsNewJob] = useState(true)
    const [redirectUrl, setRedirectUrl] = useState("")

    const handleModalClick = (event : React.MouseEvent) => {
        event.stopPropagation()
    }

    const InfoModal = () => {
        return (
            <div className='modal-backdrop' onClick={() => setTogglePopup(false)}>
                <div className='modal-content min-h-1/4 w-3/4 flex flex-col justify-center items-center' onClick={handleModalClick}>
                    <Image src={isNewJob ? "/images/briefcase-white.svg" : "/images/security-card-white.svg"} alt="icon" width={60} height={60} color='white' className='mb-2'/>
                    <div className='text-center'>
                        According to your defensibility score, your <span className='underline'>{cause}</span> is/are weak. Hence, we suggest <span className='font-bold'>{suggestion}</span>
                    </div>
                    <Link className='self-end' href={redirectUrl}><BsArrowRightCircleFill size={25}/></Link>
                </div>
            </div>
        )
    }

  return (
    <div className='flex flex-col justify-start items-center w-full px-6 py-2'>
        {togglePopup && <InfoModal/>}
        <div className='flex justify-between w-full items-start mb-2'>
            <div>
                <div className='font-bold text-lg'>Recommended for you</div>
                <div>Based on your defensibility score</div>
            </div>
            <div className='underline text-lg'>More</div>
        </div>
        <div className='w-full bg-white rounded-2xl text-global-primary-black p-3 flex items-center mb-4 cursor-pointer'
            onClick={() => {
                setTogglePopup(true)
                setIsNewJob(true)
                setCause("Job Security")
                setSuggestion("Job Career Switch")
                setRedirectUrl("/learn")
            }}
        >
            <Image src="/images/briefcase-black.svg" alt="briefcase" width={50} height={50}/>
            <div className='ml-3'>
                <div className='font-bold text-lg'>Job Career Switch</div>
                <div>Currently, your defensibility score is low due to the job factor.</div>
                <BsArrowDownRightCircleFill className='float-right'/>
            </div>
        </div>
        <div className='w-full bg-white rounded-2xl text-global-primary-black p-3 flex items-center mb-4 cursor-pointer'
            onClick={() => {
                setTogglePopup(true)
                setIsNewJob(false)
                setCause("Insurance")
                setSuggestion("Boost to Enhanced Retirement Sum (ERS)")
                setRedirectUrl("/finance")
            }}
        >
            <Image src="/images/security-card-black.svg" alt="security-card" width={50} height={50}/>
            <div className='ml-3'>
                <div className='font-bold text-lg'>Boost to Enhanced Retirement Sum (ERS)</div>
                <div>Deposit your excess income into your CPF account to obtain higher payouts in your retirement.</div>
                <BsArrowDownRightCircleFill className='float-right'/>
            </div>
        </div>
        <div className='w-full bg-white rounded-2xl text-global-primary-black p-3 flex items-center cursor-pointer'
            onClick={() => {
                setTogglePopup(true)
                setIsNewJob(false)
                setCause("Investments")
                setSuggestion("Supplementary Retirement Scheme")
                setRedirectUrl("/finance")
            }}
        >
            <Image src="/images/security-card-black.svg" alt="security-card" width={50} height={50}/>
            <div className='ml-3'>
                <div className='font-bold text-lg'>Supplementary Retirement Scheme (SRS)</div>
                <div>Your Money in your SRS Accout is earning an interest rate of 0.05% p.a. Invest to earn higher returns.</div>
                <BsArrowDownRightCircleFill className='float-right'/>
            </div>
        </div>
    </div>
  )
}

export default RecommendSection