'use client'

import { useAppSelector } from "@redux/store"

const Notification = () => {
    const allNotifications = useAppSelector(state => state.notification)

    return (
        <div className='absolute top-20 right-0 md:top-0'>
            {allNotifications.length > 0 && allNotifications.map(notification => (
                <div className="cursor-pointer overflow-hidden bg-red-700 rounded-md mx-4 my-4" key={notification.id}>
                    <p className="p-4">{notification.message}</p>
                    {/* <div className="bg-green-500 h-1"></div> */}
                </div>
            ))}
        </div>
    )
}
 
export default Notification;