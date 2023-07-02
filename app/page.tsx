'use client'

import AddEntry from '@components/Dashboard/AddEntry'
import { useAppSelector } from '@redux/store'

export default function Home() {
  const balance = useAppSelector(state => state.balance)

  return (
    <section className='flex'>
      <div className='bg-gray-500 m-4 p-8 rounded flex-1'>
        <p>{balance.currentAmount}</p>
      </div>
      <div className='bg-gray-500 m-4 p-8 rounded '>
        <h1>Recent Transactions</h1>
        <ul>
          {balance.history.map(transaction => (
            <li key={Math.random()}>{transaction.amount}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
