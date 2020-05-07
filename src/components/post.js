/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import marked from 'marked';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
// deletePost, updatePost

function mapStateToProps(reduxState) {
  console.log('in post mapstatetoprops');
  console.log(reduxState.posts.current);
  return {
    // posts: reduxState.posts,
    currentPost: reduxState.posts.current,
  };
}

// make it a class and then do componentDidMount
// which calls fetchPost and uses the id that's in the link
// this.props.match.params.postID (what it's called in the link) into the fetchPost function
// fetch post will get the object
class Post extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('in post componentdidmount');
    console.log(this.props.match.params.postID);
    // if (this.props.posts.all.length >= 0) {
    //   this.props.fetchPost(this.props.match.params.postID);
    //   console.log('called fetch post');
    // }
    this.props.fetchPost(this.props.match.params.postID);
    console.log('called fetch post');
  }

  delPost = (event) => {
    console.log('deleting');
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  render() {
    console.log('rendering individual post');
    console.log(this.props.currentPost.title);
    // console.log(this.props.posts.all);
    // const postlist = this.props.posts.all.map((post) => {
    //   if (post.id === this.props.params.postID) {
    //     return (
    //       <div>
    //         <div id="post">
    //           <h2> {this.props.posts.current.title} </h2>
    //           <div> {this.props.posts.current.coverURL} </div>
    //           <h3>Tags: {this.props.posts.current.tags} </h3>
    //         </div>
    //         <button id="delete" type="submit" onClick={this.delPost}>Delete Post</button>
    //       </div>
    //     );
    //   } else {
    //     return (
    //       <div> {postlist} </div>
    //     );
    //   }
    // });
    return (
      <div>
        <div id="post">
          <h2> {this.props.currentPost.title} </h2>
          <div className="coverURLpost" dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.coverUrl || '') }} />
          {/* <div> {this.props.posts.current.coverUrl} </div> */}
          <h3>Tags: {this.props.currentPost.tags} </h3>
        </div>
        <button id="delete" type="submit" onClick={this.delPost}>Delete Post</button>
      </div>
    );
    // if (this.props.posts.current.id === this.props.match.params.postID) {
    //   return (
    //     <div>
    //       <h2> A singel post page </h2>
    //       <div> {this.props.posts.current.id} </div>
    //       <h3> After ID </h3>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div> ruh roh</div>
    //   );
    // }
  }
}

// const Post = (props) => {
//   console.log('my props.post is');
//   console.log(props.post);
//   return (
//     <a onClick={() => props.fetchPost(props.post.id)} href={`/posts/${props.post.id}`}>
//       {/* <div> ID: {props.match.params.id} </div> */}
//       {/* {JSON.stringify(props.posts)} */}
//       {JSON.stringify(props.post)}
//       {/* Click to call fetchposts:
//       <button type="button" onClick={props.fetchPosts}>Show all posts</button> */}
//       {/* Maybe some posts: {JSON.stringify(props.posts.all)} */}
//       {/* {console.log(props)} */}
//     </a>
//   );
// };
// // <a onClick={() => props.fetchPost(props.post.id)}>
//   {/* href={`/posts/${props.post.id}`} */}
//   {/* <div> ID: {props.match.params.id} </div> */}
//   {/* {JSON.stringify(props.posts)} */}
//   // {JSON.stringify(props.post)}
//   {/* Click to call fetchposts:
//   <button type="button" onClick={props.fetchPosts}>Show all posts</button> */}
//   {/* Maybe some posts: {JSON.stringify(props.posts.all)} */}
//   {/* {console.log(props)} */}
// // </a>
// JSON.stringify(this.props.post)

// enables this.props.currentPost
// and this.props.fetchPost, this.props.deletePost, and this.props.updatePost
export default connect(mapStateToProps, { fetchPost, deletePost })(Post);
// deletePost, updatePost
