import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Card, CardContent } from "@/components/ui/card"

import React from 'react'

const ScrollTabs = () => {
    return (
        <div className="flex flex-col px-5 py-2 items-center">
            <div className="text-lg font-bold mb-2">Ideas for you to boost your income</div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-4/5"
                >
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <div className="p-0.5">
                        <Card className="bg-cardbg text-white border-none h-28 w-20">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-sm font-semibold">Skills</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="p-0.5">
                        <Card className="bg-cardbg text-white border-none h-28 w-20">
                            <CardContent className="flex items-center justify-center p-6">
                            <span className="font-semibold">Cash Savings</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="p-0.5">
                        <Card className="bg-cardbg text-white border-none h-28 w-20">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="font-semibold">CPF</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}


export default ScrollTabs