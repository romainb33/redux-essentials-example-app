import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'


// key of the reducer is like this.state.key
export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  },
})
