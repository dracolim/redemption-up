import React from 'react'
import Image from 'next/image'

const UpskillYourselfHeader = () => {
  return (
    <div className=' flex justify-center items-center px-6 pt-4 '>
        <Image src="/images/character-writing.svg" alt='writing' width={150} height={150} className='mr-2'/>
        <div className='flex flex-col items-center justify-center max-h-[150px] '>
          <div className='font-bold text-lg'>Upskill Yourself</div>
          <div className='text-sm text-center'>Explore more courses to upskill your current job or explore other job opportunities for a career switch</div>
        </div>
    </div>
  )
}

export default UpskillYourselfHeader