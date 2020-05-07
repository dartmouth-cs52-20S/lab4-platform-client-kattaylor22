/* eslint-disable linebreak-style */
import { ActionTypes } from '../actions';

const initialState = {
  all: {},
  current: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload, current: {} };
    case ActionTypes.FETCH_POST:
      return { all: state.all, current: action.payload };
    case ActionTypes.CREATE_POST:
      return { all: action.payload, current: {} };
    case ActionTypes.DELETE_POST:
      return { all: state.all.filter(({ id }) => id !== action.payload), current: {} };
    default:
      return state;
  }
};

export default PostsReducer;
