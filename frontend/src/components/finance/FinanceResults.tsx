import React from 'react'
import Image from 'next/image';
import { IoSearch } from 'react-icons/io5'
import { FiFilter } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card"
import { IoHeartCircle } from "react-icons/io5";
import { PiArrowCircleDownRightFill } from "react-icons/pi";
import sampleFinancePlans from "../../data/sampleFinancePlans.json"

const FinanceResults = () => {
  return (
    <div className='px-5 pb-4 z-0'>
            <div className='flex items-center w-full'>
                <div className='font-semibold text-3xl mr-3'>Suggested Jobs</div>
                <div className="flex-grow border-b border-gray-700"></div>
            </div>
            <div className='mt-3'>
                <div className='flex'>
                    <div className="flex items-center justify-between bg-white p-4 rounded-full h-10 flex-grow">
                        <div className="flex flex-row items-center space-x-4 w-full pr-10">
                            <IoSearch className="mr-1" color='black' size={30}/> 
                            <input type="text" placeholder="Search for jobs" className="w-full outline-none text-black"/>
                        </div>
                    </div>
                    <div className='bg-white rounded-full h-10 w-10 flex justify-center items-center ml-1'><FiFilter color='black' size={20}/></div>
                </div>
            </div>
            <div className='mt-4 z-0'>
                {sampleFinancePlans.map((plan, index) => 
                    <Card className="relative border-none h-44 w-38 rounded-2xl overflow-hidden mb-4" key={index}>
                        <Image
                            src={"/images/pink-cloud-bg-2.svg"}
                            alt="pink-cloud"
                            width={300}
                            height={300}
                            className="absolute inset-0 z-0 object-cover top-8"
                        />
                        <CardContent className="p-4 flex flex-col justify-between h-full z-10">
                            <div className='flex items-center'>
                                <Image src={plan['svg-url']} alt='UX' width={35} height={35}/>
                                <div className="font-semibold ml-5">{plan.title}</div>
                            </div>
                            <div className='max-h-56'>
                                <p className='line-clamp-3'>
                                    {plan.description}
                                </p>
                            </div>
                            <div className="flex items-center justify-end">
                                <div className="flex items-center">
                                    <IoHeartCircle size={35}/>
                                    <a href="">
                                        <PiArrowCircleDownRightFill size={35}/>
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
                
            </div>
        </div>
  )
}

export default FinanceResults