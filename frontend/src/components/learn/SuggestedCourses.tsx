import React from 'react'
import CourseCarousel from './CourseCarousel'

const SuggestedCourses = () => {
  return (
    <div className='pb-4'>
        <div className='flex items-center w-full px-5'>
            <div className='font-semibold text-3xl mr-3'>Suggested Courses</div>
            <div className="flex-grow border-b border-gray-700"></div>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <CourseCarousel/>
        </div>
    </div>
  )
}

export default SuggestedCourses