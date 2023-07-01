'use client'

import { removeNotification } from "@redux/reducers/notificationReducer"
import { AppDispatch, useAppSelector } from "@redux/store"
import { useDispatch } from "react-redux"

const Notification = () => {
    const allNotifications = useAppSelector(state => state.notification)
    const dispatch = useDispatch<AppDispatch>()

    if(allNotifications.length === 0) {
        return null
    }

    return (
        <div className='absolute top-20 right-0 md:top-0'>
            {allNotifications.map(notification => (
                <div onClick={() => dispatch(removeNotification(notification.id))} className="cursor-pointer overflow-hidden bg-red-700 rounded-md mx-4 my-4" key={notification.id}>
                    <p className="p-4">{notification.message}</p>
                    {/* <div className="bg-green-500 h-1"></div> */}
                </div>
            ))}
        </div>
    )
}
 
export default Notification;