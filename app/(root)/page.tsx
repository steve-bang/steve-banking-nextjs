import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceAccountBox from '@/components/TotalBalanceAccountBox'
import { getLoggedInUser } from '@/lib/actions/user.action'
import { redirect } from 'next/navigation'
import React from 'react'

const HomePage = async () => {

  const userLoggedIn = await getLoggedInUser();

  if (!userLoggedIn) {
    return redirect('/login');
  }

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcome'
            user= { userLoggedIn?.name || 'Guest' }
            subtext= 'Access your account balance, transfer funds, and more.'
          />

          <TotalBalanceAccountBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance = { 15012.23 }
          />
        </header>

        Recent Transactions
      </div>

      <RightSidebar 
          user={userLoggedIn}
          transactions={[]}
          banks={[{ currentBalance: 120.55}, { currentBalance: 90.25 }]}
        />
    </section>
  )
}

export default HomePage