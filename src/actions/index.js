/* eslint-disable linebreak-style */
import axios from 'axios';

// keys for actiontypes
const ROOT_URL = 'https://lab5-kattaylor22.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=K_TAYLOR';

export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  ERROR_SET: 'ERROR_SET',
  UPDATE_POST: 'UPDATE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  console.log('in decrement');
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}

export function fetchPosts() {
  // ActionCreator returns a function
  // that gets called with dispatch
  // remember (arg) => { } is a function
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        // once we are done fetching we can dispatch a redux action with the response data
        dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
      })
      .catch((error) => {
        // whaaat?
        // dispatch an error, use it in a separate error reducer. this is the beauty of redux.
        // have an error component somewhere show it
        dispatch({ type: ActionTypes.ERROR_SET, error });
        // might you also want an ERROR_CLEAR action?
      });
  };
}

export function createPost(post, history) {
  return (dispatch) => {
    // axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      history.push('/');
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    }).then((response) => fetchPosts()(dispatch));
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        // once we are done fetching we can dispatch a redux action with the response data
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      })
      .catch((error) => {
        // whaaat?
        // dispatch an error, use it in a separate error reducer. this is the beauty of redux.
        // have an error component somewhere show it
        dispatch({ type: ActionTypes.ERROR_SET, error });
        // might you also want an ERROR_CLEAR action?
      });
  };
}

export function updatePost(post) {
  return (dispatch) => {
    // axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post).then((response) => {
    axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log(response);
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    }).then(() => fetchPosts()(dispatch))
      .then(() => fetchPost(post.id)(dispatch));
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    // axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      history.push('/');
      dispatch({ type: ActionTypes.DELETE_POST, payload: id });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password }).then((response) => {
      console.log('good zone');
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch((error) => {
      console.log('bad zone');
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
    // }).then((response) => fetchPosts()(dispatch));
  };
}

export function signupUser({ email, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password }).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch((error) => {
      dispatch(authError(`Sign up Failed: ${error.response.data}`));
    });
  };
}


// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}
