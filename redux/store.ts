import { configureStore, AnyAction, ThunkAction } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import balanceReducer from './reducers/balanceReducer'
import categoryReducer from './reducers/categoryReducer'

export const store = configureStore({
    reducer: {
        notification: notificationReducer,
        balance: balanceReducer,
        category: categoryReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType, 
    RootState, 
    unknown, 
    AnyAction
    >
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store