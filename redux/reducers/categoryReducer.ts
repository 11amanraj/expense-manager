import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@redux/store'
import { category } from '../../types/types'
import { addOneNotification } from './notificationReducer'

const initialState: category[] = []

const categoryReducer = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<category>) => {
            return state.concat(action.payload)
        },
        removeCategory: (state, action: PayloadAction<category>) => {
            return state.filter(category => category.id !== action.payload.id)
        }
    }
})

export const addOneCategory = (title: string): AppThunk => {
    return async dispatch => {
        dispatch(addCategory({
            title: title, 
            id: Math.random().toString()
        }))
        dispatch(addOneNotification({
            message: `${title} category added`,
            error: false,
            id: Math.random().toString()
        }))
    }
}

export const { addCategory, removeCategory } = categoryReducer.actions 
export default categoryReducer.reducer