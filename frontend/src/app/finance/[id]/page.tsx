"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import sampleFinancePlans from "../../../data/sampleFinancePlans.json"

interface Params {
    id: string;
  }
  
  const FinancePlanPage: React.FC<{ params: Params }> = ({ params }) => {
    const router = useRouter()
    const financePlan = sampleFinancePlans.find(plan => plan.id === params.id)

    if (!financePlan) {
        return (
            <div>Plan not found</div>
        )
    }

    return (
    <div className='px-5 my-4 '>
        <div className='flex items-center cursor-pointer' onClick={() => router.back()}><IoIosArrowBack className='mr-2' size={25}/>Back</div>
        <Card className="relative border-none my-4 rounded-3xl overflow-hidden">
            <Image
                src={"/images/pink-cloud-bg.svg"}
                alt="pink-cloud"
                width={360}
                height={360}
                className="absolute inset-0 z-0 object-cover top-8 left-40"
            />
            <CardContent className="relative z-10 px-3 py-4 h-full flex items-center max-w-full">
                <Image src={financePlan['svg-url']} alt='dbs' width={60} height={60} className='pr-3'/>
                <div className='flex-grow pl-3 border-l'>
                    <div className='font-bold'>
                        {financePlan.title}
                    </div>
                    <div className='leading-tight'>
                        {financePlan.brief}
                    </div>
                </div>
            </CardContent>
        </Card>

        <div className='mt-6'>
            <iframe
                src={financePlan['video-link']}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-3xl shadow-lg w-full h-72"
            ></iframe>
        </div>

        <div className='w-full mt-6'>
            <Accordion type="single" collapsible className=" bg-white rounded-2xl text-black px-4">
                <AccordionItem  value="item-1" onClick={() => {
                    setTimeout(() => {
                        setTimeout(() => {
                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        }, 100);
                        
                    }, 100);
                    }}>
                    <AccordionTrigger className='font-semibold text-lg'>What is {financePlan.title}?</AccordionTrigger>
                    <AccordionContent>
                        <div>
                            {financePlan.description}
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem  value="item-2" onClick={() => {
                    setTimeout(() => {
                        setTimeout(() => {
                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        }, 100);
                        
                    }, 100);
                    }}>
                    <AccordionTrigger className='font-semibold text-lg'>How does it help in retirement planning?</AccordionTrigger>
                    <AccordionContent>
                        <div>
                            {financePlan.answer}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        <div className='mt-6 flex justify-center'>
            <a href={financePlan['redirect-link']} target="_blank" rel="noopener noreferrer" className='w-11/12 font-semibold text-xl flex justify-center items-center p-3 rounded-xl bg-website-red'><div >More Info</div></a>
        </div>
    </div>
  )
}

export default FinancePlanPage