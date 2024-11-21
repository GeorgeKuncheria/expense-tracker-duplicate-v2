'use client'

import React from 'react'
import BudgetList from '@/app/(root)/dashboard/budgets/components/BudgetList';

type Props = {}

const Income = (props: Props) => {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">My Budget List</h2>
      <BudgetList />
    </div>
  )
}

export default Income