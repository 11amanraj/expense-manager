import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'
import { addOneCredit, addOneExpense } from '@redux/reducers/balanceReducer'
import { useState } from 'react'
import Modal from '@components/UI/Modal'
import { faSmile } from '@fortawesome/free-regular-svg-icons'

const AddEntry = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="flex justify-center items-center bg-gray-600 p-4 m-4 rounded-md h-40">
            <FontAwesomeIcon 
                onClick={() => setShowModal(true)}
                // onClick={() => dispatch(addOneCredit(500))} 
                className='flex-1 h-full w-full text-green-500 cursor-pointer' 
                icon={faCirclePlus}
            />
            <FontAwesomeIcon 
                onClick={() => dispatch(addOneExpense(400))} 
                className='flex-1 h-full w-full text-red-500 cursor-pointer' 
                icon={faCirclePlus}
            />
            <Modal showModal={showModal} onClose={() => setShowModal(false)}/>
        </div>
    )
}

export default AddEntry