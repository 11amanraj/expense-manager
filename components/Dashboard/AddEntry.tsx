import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'
import { addOneCredit, addOneExpense } from '@redux/reducers/balanceReducer'
import { useEffect, useRef, useState } from 'react'
import Modal from '@components/UI/Modal'

const AddEntry = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setError(null)
        }, 5000)

        return () => clearTimeout(timer)
    }, [error])

    const addAmountHandler = () => {
        if(inputRef.current) {
            const amount = parseInt(inputRef.current.value)
            if(isNaN(amount)) {
                // dispatch(addOneCredit(0))
                setError('Expense can only have numerical values')
            } else {
                dispatch(addOneCredit(amount))
                setShowModal(false)
            }
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
                    {error && <div className='text-red-500'>{error}</div>}
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