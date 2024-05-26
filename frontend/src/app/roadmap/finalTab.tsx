"use Client"

import React, {useRef, useEffect} from 'react'
import type { Job, Video, Resource } from "@/utils/jobInfo";
import { jobs } from '@/utils/jobInfo';
import Image from 'next/image';
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FinalTab = (toDisplay:boolean) => {
    const job = jobs[0];
    const videos = job.videos;
    const resources = job.resources;
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    return (
    <>
        <Accordion type="single" collapsible className="w-full bg-white rounded-2xl px-4 text-black">
            <AccordionItem value="item-1" onClick={() => {
                setTimeout(() => {
                    setTimeout(() => {
                        if (window !== undefined) {
                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        }
                    }, 100);
                    
                }, 100);
                }}>
                <AccordionTrigger className='font-semibold text-lg'>Free resources</AccordionTrigger>
                <AccordionContent>
                    <div>
                        {videos.map((video) => (
                            <div key={video.videoNumber}>
                                <div>
                                    <iframe
                                        className='items-center justify-center w-full h-30 col-span-2'
                                        src={video.url}
                                        allow='autoplay; encrypted-media'
                                        title='video'
                                    />
                                    <div className='my-2'>{video.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div ref={ref1}></div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" onClick={() => {
                setTimeout(() => {
                    setTimeout(() => {
                        if (window !== undefined) {
                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        }
                    }, 100);
                    
                }, 100);
                }}>
                <AccordionTrigger className='font-semibold text-lg'>Professional Certificates</AccordionTrigger>
                <AccordionContent>
                    <div>
                        <div className='mb-2'>Click on any resources to checkout the different professional certificates</div>
                        {resources.map((resource) => (
                            <div key={resource.resourceNumber}>
                                <div className='my-2'>
                                    <Link href={resource.link}>
                                        <Image src={resource.imageUrl} alt='resource' width={420} height={20} className='m-auto'/>
                                    </Link>
                                </div>
                            </div>
                        ))}        
                    </div>
                    <div ref={ref2}></div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>
);
}

export default FinalTab