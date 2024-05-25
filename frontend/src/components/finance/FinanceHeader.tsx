import React from 'react'
import Image from 'next/image'

const FinanceHeader = () => {
  return (
    <div className=' flex justify-center items-center px-5 pt-4 '>
        <Image src="/images/character-dog.svg" alt='writing' width={150} height={150} className='mr-2'/>
        <div className='flex flex-col items-center justify-center max-h-[150px] '>
          <div className='font-bold text-lg'>Finance</div>
          <div className='text-sm text-center'>Explore more ways to improve your finances to better prepare for your retirement</div>
        </div>
    </div>
  )
}

export default FinanceHeader