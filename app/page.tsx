'use client'

import { useAppSelector } from '@redux/store'
import { transactionType } from '../types/types'

export default function Home() {
  const balance = useAppSelector(state => state.balance)

  return (
    <section className='flex flex-col md:flex-row'>
      <div className='bg-gray-500 m-4 p-8 rounded flex-1 flex'>
        <h1 className='text-xl'>Current Balance : </h1>
        <p className='flex-1 text-6xl flex justify-center items-center'>{balance.currentAmount}</p>
      </div>
      <div className='bg-gray-500 m-4 p-8 rounded '>
        <h1>Recent Transactions</h1>
        <ul className=''>
          {balance.history.map(transaction => (
            <li 
              key={Math.random()} 
              className={`${transaction.type === transactionType.CREDIT ? 'bg-blue-400' : 'bg-red-400'} my-2 py-2 px-4 rounded-lg flex justify-between gap-4`}
            >
              <p>{transaction.amount}</p>
              <p>{transaction.date.getUTCDate()}/{transaction.date.getUTCMonth()}/{transaction.date.getFullYear()}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
