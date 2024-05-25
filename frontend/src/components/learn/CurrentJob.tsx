import React from 'react'
import Image from 'next/image'

const CurrentJob = () => {
  return (
    <div className='pb-4'>
        <div className='flex items-center w-full px-5'>
            <div className='font-semibold text-3xl mr-3'>Current Job</div>
            <div className="flex-grow border-b border-gray-700"></div>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <Image src="/images/character-bird.svg" alt='writing' width={150} height={150} className=''/>
            <div>Software Engineer</div>
        </div>
    </div>
  )
}

export default CurrentJob