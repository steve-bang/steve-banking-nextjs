import AnimatedCounter from '@/components/AnimatedCounter'
import DoughnutChart from '@/components/ui/DoughnutChart'
import React from 'react'

const TotalBalanceAccountBox = ( {
    accounts, totalBanks, totalCurrentBalance
} : TotalBalanceBoxProps ) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart accounts={accounts} />
        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts {totalBanks ?? 0}
            </h2>

            <div className='flex flex-col gap-2'>
            <div className='total-balance-label'>
                Total Current Balance
            </div>
            <div className='total-balance-amount flex-center gap-2'>
                <AnimatedCounter amount={totalCurrentBalance} />
            </div>
        </div>
        </div>
    </section>
  )
}

export default TotalBalanceAccountBox