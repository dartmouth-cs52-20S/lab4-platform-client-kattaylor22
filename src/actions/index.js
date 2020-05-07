/* eslint-disable linebreak-style */
import axios from 'axios';

// keys for actiontypes
const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=K_TAYLOR';

export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
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
  console.log(post);

  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
      console.log('post resopnse');
      console.log(response);
      history.push('/');
      console.log('do i get here 1');
    }).catch((error) => {
      console.log('failed to create a post');
    }).then(() => fetchPosts()(dispatch));
  };
}

// export function updatePost(post) {/* axios put */}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        console.log('response.data is');
        console.log(response.data);
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

export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      console.log('delete post response');
      console.log(response);
      history.push('/');
      dispatch({ type: ActionTypes.DELETE_POST, payload: id });
    }).catch((error) => {
      console.log('error deleting apost');
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}
