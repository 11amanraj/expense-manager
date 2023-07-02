import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@redux/store'
import { addOneNotification } from './notificationReducer'
import { balance, transaction, transactionType } from '../../types/types'

const initialState: balance = {
    currentAmount: 0,
    history: []
}

const balanceReducer = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        addCredit: (state, action: PayloadAction<transaction>) => {
            return {
                ...state,
                currentAmount: state.currentAmount + action.payload.amount,
                history: [...state.history, action.payload]
            }
        },
        addExpense: (state, action: PayloadAction<transaction>) => {
            return {
                ...state,
                currentAmount: state.currentAmount - action.payload.amount,
                history: [...state.history, action.payload]
            }
        },
    }
})

export const addOneCredit = (transaction: transaction): AppThunk => {
    return async dispatch => {
        dispatch(addCredit(transaction))
        const notification = {
            id: Math.random().toString(),
            message: `${transaction.amount} credited`,
            error: false
        }
        dispatch(addOneNotification(notification))
    }
}

export const addOneExpense = (transaction: transaction): AppThunk => {
    return async dispatch => {
        dispatch(addExpense(transaction))
        const notification = {
            id: Math.random().toString(),
            message: `Expense of ${transaction.amount}`,
            error: false
        }
        dispatch(addOneNotification(notification))
    }
}

export const { addCredit, addExpense } = balanceReducer.actions
export default balanceReducer.reducer