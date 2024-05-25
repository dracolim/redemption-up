import React from 'react'
import FinanceHeader from '@/components/finance/FinanceHeader'
import FinanceTypesCarousel from '@/components/finance/FinanceTypesCarousel'
import FinanceResults from '@/components/finance/FinanceResults'

const Finance = () => {
  return (
    <div>
      <FinanceHeader/>
      <FinanceTypesCarousel/>
      <FinanceResults/>
    </div>
  )
}

export default Finance