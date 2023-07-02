'use client'

import { useAppSelector } from '@redux/store'
import { transactionType } from '../types/types'

export default function Home() {
  const balance = useAppSelector(state => state.balance)

  return (
    <section className='flex'>
      <div className='bg-gray-500 m-4 p-8 rounded flex-1'>
        <p>{balance.currentAmount}</p>
      </div>
      <div className='bg-gray-500 m-4 p-8 rounded '>
        <h1>Recent Transactions</h1>
        <ul className=''>
          {balance.history.map(transaction => (
            <li 
              key={Math.random()} 
              className={`${transaction.type === transactionType.CREDIT ? 'bg-blue-400' : 'bg-red-400'} my-2 py-2 px-4 rounded-lg flex gap-4`}
            >
              <p>{transaction.amount}</p>
              <p>{transaction.date.toString()}</p>
              <p>{transaction.type}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
