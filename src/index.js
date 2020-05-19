/* eslint-disable linebreak-style */
import React from 'react';
// import { connect, Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
// import {
//   BrowserRouter as Router, Switch, Route, NavLink,
// } from 'react-router-dom';
import './style.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { ActionTypes } from './actions/index';
// import Counter from './components/counter';
// import Controls from './components/controls';
import reducers from './reducers';
// import Post from './components/post';
// import CreatePost from './components/CreatePost';
import App from './components/app';


// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Posts</NavLink></li>
//         <li><NavLink to="/posts/new">New Post</NavLink></li>
//         {/* <li><NavLink to={posts/${post.id}}>Post id1</NavLink></li> */}
//         {/* <li><NavLink to="/posts/:postID">Post id2</NavLink></li> */}
//       </ul>
//     </nav>
//   );
// };

// const NewPost = (props) => {
//   return (
//     <div>
//       A form to make new posts
//       <CreatePost />
//     </div>
//   );
// };

// const Posts = (props) => {
//   return (
//     <div>
//       List all posts
//       <Post />
//       <Counter />
//       <Controls />
//     </div>
//   );
// };

// const Post = (props) => {
//   return <div> ID: {props.match.params.id} </div>;
// };

// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };


// const App = (props) => {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Posts} />
//           <Route path="/posts/new" component={NewPost} />
//           {/* <Route path="/posts/:postID" component={Post} /> */}
//           <Route render={() => (<div>post not found </div>)} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };


// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: ActionTypes.AUTH_USER });
}

// we now wrap App in a Provider
ReactDOM.render(
  <Provider store={store}>
    <div id="header">
      <h1>COMPLAIN</h1>
      <h2 id="subtitle">Enter Complaints Below</h2>
    </div>
    <App />
  </Provider>,
  document.getElementById('main'),
);

// export default connect(null, { fetchPosts })(App);
