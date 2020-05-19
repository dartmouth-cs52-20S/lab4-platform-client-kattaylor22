/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { fetchPosts } from '../actions/index';
import CreatePost from './CreatePost';
import Posts from './Posts';
import Post from './Post';
import SignUp from './SignUp';
import SignIn from './SignIn';
import NavBar from './NavBar';
import PrivateRoute from './privateRoute';


// const Nav = (props) => {
//   return (
//     <nav id="nav">
//       <ul>
//         <li><NavLink id="link" to="/" exact>Posts</NavLink></li>
//         <li><NavLink id="link" to="/posts/new">New Post</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

const NewPost = (props) => {
  return (
    <div>
      <CreatePost />
    </div>
  );
};

// function mapStateToProps(reduxState) {
//   return {
//     posts: reduxState.posts,
//     // currentPost: reduxState.posts.current,
//   };
// }

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Router>
        <div id="appmain">
          {/* <Nav /> */}
          <NavBar />
          <Switch>
            <Route exact path="/" component={Posts} />
            <PrivateRoute path="/posts/new" component={NewPost} />
            {/* <Route path="/posts/new" component={NewPost} /> */}
            <Route path="/posts/:postID" component={Post} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route render={() => (<div>post not found </div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, { fetchPosts })(App);
