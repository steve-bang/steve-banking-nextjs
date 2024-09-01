import HeaderBox from '@/components/HeaderBox'
import TotalBalanceAccountBox from '@/components/TotalBalanceAccountBox'
import React from 'react'

const HomePage = () => {

  const userLoggedIn = { firstName: 'Steve' }

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcome'
            user= { userLoggedIn?.firstName || 'Guest' }
            subtext= 'Access your account balance, transfer funds, and more.'
          />

          <TotalBalanceAccountBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance = { 15012.23 }
          />
        </header>
      </div>
    </section>
  )
}

export default HomePage