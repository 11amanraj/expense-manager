'use client'

import AddEntry from '@components/Dashboard/AddEntry'
import { useAppSelector } from '@redux/store'

export default function Home() {
  const balance = useAppSelector(state => state.balance)

  return (
    <section>
      <AddEntry />
      <div className='bg-gray-500 m-4 p-8 rounded'>{balance}</div> 
    </section>
  )
}
