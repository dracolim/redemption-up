"use client"

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { use, ChangeEvent, useEffect, useState } from "react";
import GoalProgressTracker from "@/components/homepage/GoalProgressTracker";
import RecommendSection from "@/components/homepage/RecommendSection";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useRef } from "react";
import Intro from "@/components/Intro";

export default function Home() {
  const [selectedWindow, setSelectedWindow] = useState("Monthly")
  const [projectedIncome, setProjectedIncome] = useState(2000)
  const [retirementGoal, setRetirementGoal] = useState(2750)
  const [monthlyRetirementGoal, setMonthlyRetirementGoal] = useState(2750)
  const [retirementAge, setRetirementAge] = useState(65)
  const [defensibilityScore, setDefensibilityScore] = useState(67)
  const [scoreColor, setScoreColor] = useState("")
  const [showDefenseToolTip, setShowDefenseToolTip] = useState(false)
  const [showGoalToolTip, setShowGoalToolTip] = useState(false)
  const [percentageProgress, setPercentageProgress] = useState(47)

  const inputRetirementGoalRef = useRef<HTMLInputElement>(null);
  const inputAgeRef = useRef<HTMLInputElement>(null);

  const monthlyProjectIncome = 2000
  const currentAge = 53
  const lifeExpectancy = 85
  const currentSavings = 310000

  useEffect(() => {
    const retirementGoalSum = (lifeExpectancy - retirementAge) * monthlyRetirementGoal * 12
    const percentageProgress = Math.min( Math.round((currentSavings / retirementGoalSum) * 100), 100)
    console.log(percentageProgress)
    setPercentageProgress(percentageProgress)
  }, [monthlyRetirementGoal, retirementAge])

  const [open, setOpen] = useState(false)


  useEffect(() => {
    setOpen(true)
  }, [])

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
  }, [selectedWindow, monthlyRetirementGoal])

  useEffect(() => {
    if (defensibilityScore >= 0 && defensibilityScore <= 33 ) {
      setScoreColor('#FF0000')
    }
    if (defensibilityScore > 33 && defensibilityScore <= 80 ) {
      setScoreColor('#FFFF00')
    }
    if (defensibilityScore >= 80 && defensibilityScore <= 100 ) {
      setScoreColor('#00FF00')
    }
  }, [defensibilityScore])

  const handleModalClick = (event : React.MouseEvent) => {
    event.stopPropagation()
}

const DefenseModal = () => {
    return (
        <div className='modal-backdrop' onClick={() => setShowDefenseToolTip(false)}>
            <div className='modal-content min-h-1/4 w-3/4 flex flex-col justify-center items-center p-6' onClick={handleModalClick}>
            Defensibility score is a score (out of 100) that determines your overall position of achieving your retirement income! This is score is dynamically weighted based on the factor based amount of money you need to reach your retirement goal contributed by employment income and portfolio returns. Additionally, we consider global factors that will affect your job security and finance portfolio.
            </div>
        </div>
    )
}

const handleClick = () => {
  if (inputRetirementGoalRef.current && inputAgeRef.current) {
    setMonthlyRetirementGoal(Number(inputRetirementGoalRef.current.value));
    setRetirementAge(Number(inputAgeRef.current.value));
  }
  setShowGoalToolTip(false); // Close modal after setting the values
}

const EditGoalModal = () => {
  return (
      <div className='modal-backdrop flex flex-col' onClick={() => setShowGoalToolTip(false)}>
          <div className='modal-content min-h-1/4 w-3/4 flex flex-col justify-center items-center' onClick={handleModalClick}>
              <div className="flex flex-col justify-center items-center">
                <div className="text-center">1. Enter your desired retirement income per month</div>
                <input type="number" ref={inputRetirementGoalRef} className="text-black p-2 rounded-lg outline-none text-md mt-2"/>
              </div>
              <div className="mt-5 flex flex-col justify-center items-center">
                <div>2. Enter your desired retirement age</div>
                <input type="number" max={lifeExpectancy} ref={inputAgeRef} className="text-black p-2 rounded-lg outline-none text-md mt-2"/>
              </div>
            <button className="bg-website-red text-lg rouneded-xl mt-5 p-2 rounded-2xl" onClick={handleClick}>Confirm</button>
          </div>
      </div>
  )
}


  return (
    <div className="">
      {showDefenseToolTip && <DefenseModal/>}
      {showGoalToolTip && <EditGoalModal/>}

      <Intro open={open} setOpen={setOpen}/>
      <div className="w-full flex justify-end px-5 py-4 items-center">
        <div className="p-2 flex items-center">
          <CgProfile/>
          <div className="mx-2">Jane Koh</div>
          <IoIosArrowDown/>
        </div>
      </div>
      
      <div className="flex items-center px-6 py-4 just">
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

      <div className="flex w-full justify-between px-6 py-4 h-60">
        <div className="w-1/2 flex justify-start mr-1">
          <div className="w-full flex flex-col items-center">
            <div className="h-1/2 flex flex-col justify-center items-center bg-cardbg w-full rounded-3xl mb-2 px-4 py-2 relative">
              <div className="font-bold mb-1 text-center w-full text-sm">
                  <div>Projected Retirement Income</div> 
                  <IoMdInformationCircleOutline className="absolute top-3 right-3 cursor-pointer"/>
              </div>
              <div className="text-lg">${projectedIncome}</div>
            </div>
            <div className="h-1/2 flex flex-col justify-center items-center bg-cardbg w-full rounded-3xl px-7 py-2 relative">
              <div className="font-bold mb-1 text-center text-sm">
                Retirement Income Goal <IoMdInformationCircleOutline className="absolute top-3 right-3 cursor-pointer" onClick={()=>setShowGoalToolTip(true)}/>
              </div>
              <div className="text-lg text-center">${retirementGoal} at age {retirementAge}</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end ml-1">
          <div className="w-full flex flex-col justify-center items-center bg-cardbg rounded-3xl p-4 relative">
            <div className="font-bold text-center mb-2 text-sm">
              Defensibility Score
              <IoMdInformationCircleOutline className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowDefenseToolTip(true)}/>
            </div>
            <div style={{width: 150, height: 150}}>
              <CircularProgressbarWithChildren value={defensibilityScore} styles={buildStyles({pathColor: scoreColor})} strokeWidth={12} counterClockwise={true}>
                <div className="font-bold text-3xl">{defensibilityScore}</div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </div>
      <GoalProgressTracker onTrack={false} percentageProgress={percentageProgress}/>
      <RecommendSection/>
    </div>
  );
}

