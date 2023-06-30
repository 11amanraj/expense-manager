import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { addOneNotification } from '@redux/reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'

interface notification {
  message: string,
  error: boolean,
  id: string
}

const AddEntry = () => {
    const dispatch = useDispatch<AppDispatch>()

    const addEntryHandler = (message: string) => {
        const notification: notification = {
        message: message,
        error: false,
        id: Math.random().toString()
        }
        dispatch(addOneNotification(notification))   
    }

    return (
        <div className="flex justify-center items-center bg-gray-600 p-4 m-4 rounded-md h-40">
            <FontAwesomeIcon 
                onClick={() => addEntryHandler('Money Credited')} 
                className='flex-1 h-full w-full text-green-500 cursor-pointer' 
                icon={faCirclePlus}
            />
            <FontAwesomeIcon 
                onClick={() => addEntryHandler('Expenses Added')} 
                className='flex-1 h-full w-full text-red-500 cursor-pointer' 
                icon={faCirclePlus}
            />
        </div>
    )
}

export default AddEntry