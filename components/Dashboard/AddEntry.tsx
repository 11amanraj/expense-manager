import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@redux/store'
import { addOneCredit, addOneExpense } from '@redux/reducers/balanceReducer'
import { useEffect, useRef, useState } from 'react'
import Modal from '@components/UI/Modal'
import { transactionType } from '../../types/types'

const AddEntry = () => {
    const dispatch = useDispatch<AppDispatch>()
    const allCategories = useAppSelector(state => state.category)
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const expenseRadioRef = useRef<HTMLInputElement>(null)
    const creditRadioRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(error.length > 0) {
            const timer = setTimeout(() => {
                setError('')
            }, 5000)

            return () => clearTimeout(timer)
        }
    }, [error])

    const addAmountHandler = () => {
        if(inputRef.current && expenseRadioRef.current && creditRadioRef.current) {
            const amount = parseInt(inputRef.current.value)
            if(isNaN(amount)) {
                setError('Expense can only have numerical values')
            } else {
                expenseRadioRef.current.checked 
                    ? dispatch(addOneExpense({
                        type: transactionType.EXPENSE,
                        amount: amount,
                        date: new Date(),
                        description: ''
                    })) 
                    : dispatch(addOneCredit({
                        type: transactionType.CREDIT,
                        amount: amount,
                        date: new Date(),
                        description: ''
                    }))
                
                setShowModal(false)
                setError('')
            }
        }
    }

    const closeModalHandler = () => {
        setShowModal(false)
        setError('')
    }

    return (
        <>
            <FontAwesomeIcon 
                onClick={() => setShowModal(true)}
                className='flex-1 h-full w-full text-green-500 cursor-pointer' 
                icon={faCirclePlus}
            />
            <Modal showModal={showModal} onClose={closeModalHandler}>
                <h2 className='text-lg my-4'>Add Credit/Expense</h2>
                <fieldset>
                    <legend>Select type of transaction</legend>
                    <div>
                        <label htmlFor="expense">Expense</label>
                        <input type='radio' id='expense' name='amountType' value='expense' defaultChecked ref={expenseRadioRef}/>

                        <label htmlFor="credit">Credit</label>
                        <input type='radio' id='credit' name='amountType' value='credit' ref={creditRadioRef}/>
                    </div>
                </fieldset>
                <div className='flex gap-2 items-center'>
                    <label htmlFor='amount'>Amount</label>
                    <input 
                        className='bg-white text-teal-900 flex-auto min-w-0 rounded-sm p-2' 
                        type='number' 
                        id='amount' 
                        name='amount'
                        ref={inputRef}
                    />
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <label htmlFor="category">Choose a Category:</label>
                    <select className='px-2 py-2 rounded flex-1 text-black' name="category" id="category">
                        {allCategories.map(category => (
                            <option key={category.id} value={category.title}>{category.title}</option>
                        ))}
                    </select> 
                </div>
                <div className='text-red-500 text-xs h-4'>{error}</div>
                <div className='flex justify-between'>
                    <button 
                        className='bg-red-600 p-2 rounded-sm hover:bg-red-900' 
                        onClick={closeModalHandler}
                    >Close Modal</button>
                    <button 
                        className='bg-green-600 p-2 rounded-sm hover:bg-green-900' 
                        onClick={addAmountHandler}
                    >Add Amount</button>
                </div>
            </Modal>
        </>
    )
}

export default AddEntry