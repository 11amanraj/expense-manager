import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@redux/store'
import { addOneNotification } from './notificationReducer'
import { balance } from '../../types/types'

const initialState: number = 0

const balanceReducer = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        addCredit: (state, action: PayloadAction<number>) => {
            return state + action.payload
        },
        addExpense: (state, action: PayloadAction<number>) => {
            return state - action.payload
        } 
    }
})

export const addOneCredit = (amount: number): AppThunk => {
    return async dispatch => {
        dispatch(addCredit(amount))
        const notification = {
            id: Math.random().toString(),
            message: `${amount} credited`,
            error: false
        }
        dispatch(addOneNotification(notification))
    }
}

export const addOneExpense = (amount: number): AppThunk => {
    return async dispatch => {
        dispatch(addExpense(amount))
        const notification = {
            id: Math.random().toString(),
            message: `Expense of ${amount}`,
            error: false
        }
        dispatch(addOneNotification(notification))
    }
}

export const { addCredit, addExpense } = balanceReducer.actions
export default balanceReducer.reducer