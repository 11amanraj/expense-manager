import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'
import { addOneCredit, addOneExpense } from '@redux/reducers/balanceReducer'
import { useRef, useState } from 'react'
import Modal from '@components/UI/Modal'
import { faSmile } from '@fortawesome/free-regular-svg-icons'

const AddEntry = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [showModal, setShowModal] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const addAmountHandler = () => {
        if(inputRef.current) {
            const amount = parseInt(inputRef.current.value)
            if(isNaN(amount)) {
                dispatch(addOneCredit(0))
            } else {
                dispatch(addOneCredit(amount))
            }
            setShowModal(false)
        }
    }

    return (
        <div className="flex justify-center items-center bg-gray-600 p-4 m-4 rounded-md h-40">
            <FontAwesomeIcon 
                onClick={() => setShowModal(true)}
                className='flex-1 h-full w-full text-green-500 cursor-pointer' 
                icon={faCirclePlus}
            />
            <FontAwesomeIcon 
                onClick={() => dispatch(addOneExpense(400))} 
                className='flex-1 h-full w-full text-red-500 cursor-pointer' 
                icon={faCirclePlus}
            />
            <Modal showModal={showModal} onClose={() => setShowModal(false)}>
                <h2>Add Credit/Expense</h2>
                <div>
                    <label htmlFor='amount'>Amount</label>
                    <input className='bg-gray-400 text-teal-900' type='number' id='amount' ref={inputRef}/>
                </div>
                <div>
                    <button onClick={() => setShowModal(false)}>Close Modal</button>
                    <button onClick={addAmountHandler}>Add Amount</button>
                </div>
            </Modal>
        </div>
    )
}

export default AddEntry