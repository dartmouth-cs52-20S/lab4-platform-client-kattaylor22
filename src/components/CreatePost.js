/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions/index';


function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts,
    // currentPost: reduxState.posts.current,
  };
}

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      coverUrl: '',
    };
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  onTagChange = (event) => {
    this.setState({ tags: event.target.value });
  }

  onCoverChange = (event) => {
    this.setState({ coverUrl: event.target.value });
  }

  makePost = (event) => {
    // this will make a post.. then pass it to the action creater
    // but how to make a real post
    console.log('make post called');
    console.log(this.state.title);
    console.log(this.props.history);
    this.props.createPost(this.state, this.props.history);
  }

  render() {
    return (
      <div id="newPost">
        <div>
          <h2>Title:</h2>
          <input id="title" onChange={this.onTitleChange} value={this.state.title} />
        </div>
        <div id="coverURL" onChange={this.onCoverChange} value={this.state.coverUrl}>
          <h2>coverUrl:</h2>
          <input />
        </div>
        <div id="Tags" onChange={this.onTagChange} value={this.state.tags}>
          <h2>Tags:</h2>
          <input />
        </div>
        <button id="submit" type="submit" onClick={this.makePost}>Create Post</button>
        {/* <button type="submit" onClick={(e) => this.newNote(this.state.searchterm, e)}>Create Note</button> */}
      </div>
    );
  }
}

// const CreatePost = (props) => {
//   console.log('bout to render createPost');
//   return (
//     <div id="newPost">
//       <div id="title">
//         Title:
//         <input />
//       </div>
//       <div id="Tags">
//         Tags:
//         <input />
//       </div>
//       <div id="coverURL">
//         coverURL:
//         <input />
//       </div>
//       <button type="button">Create Post</button>
//     </div>
//   );
// };

export default withRouter(connect(mapStateToProps, { createPost })(CreatePost));
