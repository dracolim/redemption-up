"use client"
import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

const FinanceTypesCarousel = () => {
    const [selectedFinanceType, setSelectedFinanceType] = useState("CPF")
  return (
    <div className='pb-4'>
        <div className='flex items-center w-full px-6'>
            <div className='font-semibold text-3xl mr-3'>Types</div>
            <div className="flex-grow border-b border-gray-700"></div>
        </div>
        <div className='flex justify-center items-center flex-col'>
        <div className="px-6 py-2 w-full">
            <div className="flex justify-center w-full">
                <Carousel
                    opts={{
                    align: "start",
                    }}
                    className="w-4/5"
                >
                    <CarouselContent>
                        <CarouselItem className="basis-1/4">
                            <div className="p-0.5">
                                <div className='flex flex-col items-center'>
                                    <div className={`${selectedFinanceType == "CPF" ? "bg-website-red" : "bg-navbarbg"} p-3 rounded-2xl flex justify-center items-center cursor-pointer h-20 w-20`} onClick={() => setSelectedFinanceType("CPF")}>
                                        <Image src="/images/cpf-logo.png" alt='cpf' width={60} height={60}/>
                                    </div>
                                    <div className='text-center'>CPF</div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <div className="p-0.5">
                                <div className='flex flex-col items-center'>
                                    <div className={`${selectedFinanceType == "Robo" ? "bg-website-red" : "bg-navbarbg"} p-3 rounded-2xl flex justify-center items-center cursor-pointer h-20 w-20`} onClick={() => setSelectedFinanceType("Robo")}>
                                        <Image src="/images/robot.svg" alt='robot' width={60} height={60}/>
                                    </div>
                                    <div className='text-center'>RoboAdvisor</div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <div className="p-0.5">
                                <div className='flex flex-col items-center'>
                                    <div className={`${selectedFinanceType == "Stocks" ? "bg-website-red" : "bg-navbarbg"} p-3 rounded-2xl flex justify-center items-center cursor-pointer h-20 w-20`} onClick={() => setSelectedFinanceType("Stocks")}>
                                        <Image src="/images/sales-sector.svg" alt='stocks' width={60} height={60}/>
                                    </div>
                                    <div className='text-center'>Stocks</div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <div className="p-0.5">
                                <div className='flex flex-col items-center'>
                                    <div className={`${selectedFinanceType == "Bonds" ? "bg-website-red" : "bg-navbarbg"} p-3 rounded-2xl flex justify-center items-center cursor-pointer h-20 w-20`} onClick={() => setSelectedFinanceType("Bonds")}>
                                        <Image src="/images/real-estate-sector.svg" alt='stocks' width={60} height={60}/>
                                    </div>
                                    <div className='text-center'>Bonds</div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <div className="p-0.5">
                                <div className='flex flex-col items-center'>
                                    <div className={`${selectedFinanceType == "ETFs" ? "bg-website-red" : "bg-navbarbg"} p-3 rounded-2xl flex justify-center items-center cursor-pointer h-20 w-20`} onClick={() => setSelectedFinanceType("ETFs")}>
                                        <Image src="/images/money.svg" alt='bonds' width={60} height={60}/>
                                    </div>
                                    <div className='text-center'>ETFs</div>
                                </div>
                            </div>
                        </CarouselItem>
                        
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FinanceTypesCarousel