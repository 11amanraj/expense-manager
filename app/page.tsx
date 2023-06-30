'use client'

import { addOneNotification } from '@redux/reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'

interface notification {
  message: string,
  error: boolean,
  id: string
}

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()

  const addNotificationHandler = () => {
    const notification: notification = {
      message: Math.random().toString(),
      error: false,
      id: Math.random().toString()
    }
    dispatch(addOneNotification(notification))   
  }

  return (
    <section>
      <button onClick={addNotificationHandler} className='bg-white text-black'>Add Notification</button>
    </section>
  )
}
