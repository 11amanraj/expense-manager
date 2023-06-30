'use client'

import Notification from '@components/Notification'
import { addOneNotification } from '@redux/reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState, useAppSelector } from '@redux/store'

interface notification {
  message: string,
  error: boolean,
  id: string
}

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const allNotifications = useAppSelector(state => state.notification)

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
      <div className='absolute top-20 right-0'>
        {allNotifications.length > 0 && allNotifications.map(notification => (
          <Notification key={notification.id}>{notification.message}</Notification>
        ))}
      </div>
    </section>
  )
}
