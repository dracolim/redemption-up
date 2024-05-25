"use client"

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import GoalProgressTracker from "@/components/homepage/GoalProgressTracker";
import RecommendSection from "@/components/homepage/RecommendSection";
import ScrollTabs from "@/components/homepage/ScrollTabs";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Home() {
  const [selectedWindow, setSelectedWindow] = useState("Monthly")
  const [projectedIncome, setProjectedIncome] = useState(4000)
  const [retirementGoal, setRetirementGoal] = useState(12300)

  const monthlyProjectIncome = 4000
  const monthlyRetirementGoal = 4800

  useEffect(() => {
    if (selectedWindow == "Monthly") {
      setProjectedIncome(monthlyProjectIncome * 1)
      setRetirementGoal(monthlyRetirementGoal * 1)
    }
    if (selectedWindow == "Quarterly") {
      setProjectedIncome(monthlyProjectIncome * 4)
      setRetirementGoal(monthlyRetirementGoal * 4)
    }
    if (selectedWindow == "Yearly") {
      setProjectedIncome(monthlyProjectIncome * 12)
      setRetirementGoal(monthlyRetirementGoal * 12)
    }
  }, [selectedWindow])

  return (
    <div className="">
      <div className="w-full flex justify-end px-5 py-4 items-center">
        <div className="p-2 flex items-center">
          <CgProfile/>
          <div className="mx-2">Shanice Koh</div>
          <IoIosArrowDown/>
        </div>
      </div>
      
      <div className="flex items-center px-5 py-4 just">
        <ul className="rounded-lg bg-cardbg flex">
          <li 
            className={`${selectedWindow === "Monthly" ? "bg-website-red font-semibold rounded-lg" : "font-medium"} p-2 w-24 text-center cursor-pointer`}
            onClick={() => setSelectedWindow("Monthly")}
          >
            Monthly
          </li>
          <li 
            className={`${selectedWindow === "Quarterly" ? "bg-website-red font-semibold rounded-lg" : "font-medium"} p-2 w-24 text-center cursor-pointer`}
            onClick={() => setSelectedWindow("Quarterly")}
          >
            Quarterly
          </li>
          <li 
            className={`${selectedWindow === "Yearly" ? "bg-website-red font-semibold rounded-lg" : "font-medium"} p-2 w-24 text-center cursor-pointer`}
            onClick={() => setSelectedWindow("Yearly")}
          >
            Yearly
          </li>
        </ul>
      </div>

      <div className="flex w-full justify-between px-5 py-4 h-60">
        <div className="w-1/2 flex justify-start mr-1">
          <div className="w-full flex flex-col items-center">
            <div className="h-1/2 flex flex-col justify-center items-center bg-cardbg w-full rounded-3xl mb-2 px-4 py-2 relative">
              <div className="font-bold mb-1 text-center w-full text-sm">
                  <div>Projected Retirement Income</div> 
                  <IoMdInformationCircleOutline className="absolute top-3 right-3"/>
              </div>
              <div className="text-xl">${projectedIncome}</div>
            </div>
            <div className="h-1/2 flex flex-col justify-center items-center bg-cardbg w-full rounded-3xl px-7 py-2 relative">
              <div className="font-bold mb-1 text-center text-sm">
                Retirement Income Goal <IoMdInformationCircleOutline className="absolute top-3 right-3"/>
              </div>
              <div className="text-xl text-center">${retirementGoal}</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end ml-1">
          <div className="w-full flex flex-col justify-center items-center bg-cardbg rounded-3xl p-4 relative">
            <div className="font-bold text-center mb-2">
              Defensibility Score
              <IoMdInformationCircleOutline className="absolute top-3 right-3"/>
            </div>
            <CircularProgressbarWithChildren value={56} styles={buildStyles({pathColor: '#EA193F'})} strokeWidth={15} counterClockwise={true}>
              <div className="font-bold text-3xl">56</div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      <GoalProgressTracker onTrack={true}/>
      <RecommendSection/>
    </div>
  );
}

