import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { addOneNotification } from '@redux/reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'
import { addOneCredit, addOneExpense } from '@redux/reducers/balanceReducer'

const AddEntry = () => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="flex justify-center items-center bg-gray-600 p-4 m-4 rounded-md h-40">
            <FontAwesomeIcon 
                onClick={() => dispatch(addOneCredit(500))} 
                className='flex-1 h-full w-full text-green-500 cursor-pointer' 
                icon={faCirclePlus}
            />
            <FontAwesomeIcon 
                onClick={() => dispatch(addOneExpense(400))} 
                className='flex-1 h-full w-full text-red-500 cursor-pointer' 
                icon={faCirclePlus}
            />
        </div>
    )
}

export default AddEntry