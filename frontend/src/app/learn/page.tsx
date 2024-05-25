import React from 'react'
import UpskillYourselfHeader from '@/components/learn/UpskillYourselfHeader'
import CurrentJob from '@/components/learn/CurrentJob'
import SuggestedCourses from '@/components/learn/SuggestedCourses'
import SuggestedJobs from '@/components/learn/SuggestedJobs'

const Learn = () => {
  return (
    <div>
      <UpskillYourselfHeader/>
      <CurrentJob/>
      <SuggestedCourses/>
      <SuggestedJobs/>
    </div>
  )
}

export default Learn