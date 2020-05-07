/* eslint-disable linebreak-style */
// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CountReducer from './count-reducer';
import PostsReducer from './post-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  posts: PostsReducer,
});


export default rootReducer;
