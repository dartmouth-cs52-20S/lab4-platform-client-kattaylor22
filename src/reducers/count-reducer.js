/* eslint-disable linebreak-style */
import { ActionTypes } from '../actions';

const CountReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      console.log('in increment reducer');
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default CountReducer;
