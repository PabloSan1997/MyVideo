import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { userReducer } from '../slice/userSlice'
import { portadaReducer } from '../slice/videosSlice'

export const store = configureStore({
  reducer: {
    user:userReducer,
    losVideos:portadaReducer
  },
  devTools:import.meta.env.DEV
})


// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;