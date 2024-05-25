import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { IoHeartCircle } from "react-icons/io5";
import { PiArrowCircleDownRightFill } from "react-icons/pi";
import sampleSuggestedCourses from "../../data/sampleSuggestedCourses.json"

import React from 'react'
import Image from "next/image";

const ScrollTabs = () => {
    return (
        <div className="px-5 py-2 w-full">
            <div className="mb-2">Courses to take to up skill your current job</div>
            <div className="flex justify-center w-full">
            <Carousel
  opts={{
    align: "start",
  }}
  className="w-4/5"
>
  <CarouselContent>
    {sampleSuggestedCourses.map((course, index) => (
      <CarouselItem className="basis-1/2" key={index}>
        <div className="p-0.5">
          <Card className="relative border-none h-28 w-38 rounded-2xl overflow-hidden">
            <Image
              src={"/images/pink-cloud-bg.svg"}
              alt="pink-cloud"
              width={360}
              height={360}
              className="absolute inset-0 z-0 object-cover top-8 left-8"
            />
            <CardContent className="relative z-10 px-3 py-4 flex flex-col justify-between h-full">
              <div className="font-semibold">{course.title}</div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-center p-1.5 mr-2 rounded-full bg-course-difficulty-bg text-course-difficulty-font">
                  {course.difficulty}
                </div>
                <div className="flex items-center">
                  <IoHeartCircle size={25} />
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiArrowCircleDownRightFill size={25} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
            </div>
        </div>
    );
}


export default ScrollTabs