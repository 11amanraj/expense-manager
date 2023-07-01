'use client'

import AddEntry from '@components/Dashboard/AddEntry'
import { useAppSelector } from '@redux/store'

export default function Home() {
  const balance = useAppSelector(state => state.balance)

  return (
    <section>
      <AddEntry />
      <div>{balance}</div> 
    </section>
  )
}
