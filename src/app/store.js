import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'


// key of the reducer is like this.state.key
export default configureStore({
  reducer: {
    posts: postsReducer
  },
})
