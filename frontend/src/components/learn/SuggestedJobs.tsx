"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card"
import { IoHeartCircle } from "react-icons/io5";
import { PiArrowCircleDownRightFill } from "react-icons/pi";
import sampleSuggestedJobs from "../../data/sampleSuggestedJobs.json"
import Link from 'next/link';

const SuggestedJobs = () => {
    const [selectedSector, setSelectedSector] = useState("Tech")
  return (
    <div className='px-6 z-0'>
        <div className='pb-4'>
            <div className='flex items-center w-full'>
                <div className='font-semibold text-3xl mr-3'>Sectors</div>
                <div className="flex-grow border-b border-gray-700"></div>
            </div>
            <div className='mt-2'>
                <div className='flex'>
                    <div className='mr-3 flex flex-col items-center'>
                        <div className={`${selectedSector == "Tech" ? "bg-website-red" : "bg-navbarbg"} p-3 rounded-2xl flex justify-center items-center cursor-pointer h-20 w-20`} onClick={() => setSelectedSector("Tech")}>
                            <Image src="/images/tech-sector.svg" alt='tech' width={60} height={60}/>
                        </div>
                        <div className='text-center'>Technology</div>
                    </div>
                    <div className='mr-3 flex flex-col items-center'>
                        <div className={`${selectedSector == "Sales" ? "bg-website-red" : "bg-navbarbg"} p-3 rounded-2xl flex justify-center items-center cursor-pointer h-20 w-20`} onClick={() => setSelectedSector("Sales")}>
                            <Image src="/images/sales-sector.svg" alt='sales' width={60} height={50}/>
                        </div>
                        <div className='text-center'>Sales</div>
                    </div>
                    <div className='mr-3 flex flex-col items-center'>
                        <div className={`${selectedSector == "Real Estate" ? "bg-website-red" : "bg-navbarbg"} p-3 rounded-2xl flex justify-center items-center cursor-pointer h-20 w-20`} onClick={() => setSelectedSector("Real Estate")}>
                            <Image src="/images/real-estate-sector.svg" alt='real-estate' width={60} height={60}/>
                        </div>
                        <div className='text-center'>Real Estate</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='pb-4 z-0'>
            <div className='flex items-center w-full'>
                <div className='font-semibold text-3xl mr-3'>Suggested Jobs</div>
                <div className="flex-grow border-b border-gray-700"></div>
            </div>
            <div className="mb-2">Based on your defensibility score</div>
            <div className='mt-2'>
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
                {sampleSuggestedJobs.map((job, index) => 
                    <Card className="relative border-none h-44 w-38 rounded-2xl overflow-hidden mb-4" key={index}>
                        <Image
                            src={"/images/pink-cloud-bg-2.svg"}
                            alt="pink-cloud"
                            width={300}
                            height={300}
                            className="absolute inset-0 z-0 object-cover top-8"
                        />
                        <CardContent className="absolute p-4 flex flex-col justify-between h-full z-0">
                            <div className='flex items-center'>
                                <Image src={job['svg-url']} alt='UX' width={35} height={35}/>
                                <div className="font-semibold ml-5">{job.title}</div>
                            </div>
                            <div className='max-h-40 overflow-hidden'>
                                <p className='line-clamp-3'>
                                    {job.description}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className='flex'>
                                    {job.sector.map((sector, index) => <div key={index} className="text-xs text-center p-1.5 mr-2 rounded-full bg-course-difficulty-bg text-course-difficulty-font">{sector}</div>)}
                                </div>
                                <div className="flex items-center">
                                    <IoHeartCircle size={30}/>
                                    <Link href={job['redirect-link']}>
                                        <PiArrowCircleDownRightFill size={30}/>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default SuggestedJobs