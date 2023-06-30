'use client'

import { useAppSelector } from "@redux/store"

const Notification = () => {
    const allNotifications = useAppSelector(state => state.notification)
    
    // return ( 
    //     <div className="cursor-pointer bg-red-700 px-4 py-4 rounded-md mx-4 my-4">
    //         {children}
    //     </div>
    //  );

    return (
        <div className='absolute top-20 right-0'>
            {allNotifications.length > 0 && allNotifications.map(notification => (
                <div className="cursor-pointer bg-red-700 px-4 py-4 rounded-md mx-4 my-4" key={notification.id}>
                    {notification.message}
                </div>
            ))}
        </div>
    )
}
 
export default Notification;