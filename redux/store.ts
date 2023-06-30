import { configureStore, AnyAction, ThunkAction } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'

export const store = configureStore({
    reducer: {
        notification: notificationReducer
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
export default store