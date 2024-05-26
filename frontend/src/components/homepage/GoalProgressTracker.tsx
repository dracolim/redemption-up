import React from 'react'
import Image from 'next/image'
interface GoalProgressTrackerProps {
    onTrack: boolean;
    percentageProgress: number;
  }
  
  const GoalProgressTracker = ({ onTrack, percentageProgress } : GoalProgressTrackerProps) => {
  return (
    <div className='p-2 my-4 mx-6 rounded-2xl bg-website-red'>
        <div className='p-4 m-2 rounded-2xl bg-white text-black'>
            <div className='flex text-xs justify-between items-start'>
                <div className='col-span-1'><Image src="/images/targetboard.svg" alt="targetboard" width={45} height={45}/></div>
                
                <div className='flex flex-col w-5/6'>
                    <div>Your Retirement Goal Progress</div>
                    <div className='w-full bg-global-primary-gray h-4 rounded-full mt-1'>
                        <div className="bg-global-primary-black h-full rounded-full" style={{width: `${percentageProgress}%`}}></div>
                    </div>
                    <div className='self-end'>{percentageProgress}%</div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-center font-bold mt-1'>
                Progress status
                <div className={`${onTrack ? "text-ontrack-green" : "text-website-red"} text-lg`}>{onTrack ? "On Track": "Shortfall"}</div>
            </div>
        </div>
    </div>
  )
}

export default GoalProgressTracker