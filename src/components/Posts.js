/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import marked from 'marked';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
// import Post from './post';
import Counter from './counter';
import Controls from './controls';

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts,
    // currentPost: reduxState.posts.current,
  };
}

const PostsItem = (props) => {
  console.log('my coverurl is');
  console.log(props.post.coverUrl);
  return (
    <div id="postitem">
      <h2 id="posttitle">
        {props.post.title}
      </h2>
      <div id="coverURL">
        <div className="coverURLpost" dangerouslySetInnerHTML={{ __html: marked(props.post.coverUrl || '') }} />
        {/* {props.post.coverUrl} */}
      </div>
      <h3 id="tags">
        Tags: {props.post.tags}
      </h3>
    </div>
  );
};

class Posts extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('about to fetch posts');
    this.props.fetchPosts();
  }

  render() {
    if (this.props.posts.all.length >= 1) {
      console.log('now i can');
      console.log(JSON.stringify(this.props.posts.all));
      const postlist = this.props.posts.all.map((post) => {
        return <a href={`/posts/${post.id}`} key={post.id}> <PostsItem key={post.id} post={post} /> </a>;
      });

      return (
        <div id="posts">
          <ul>
            {postlist}
          </ul>
          {/* {JSON.stringify(props.posts)} */}
          {/* Maybe some posts: {JSON.stringify(props.posts.all)} */}
          {/* <Post /> */}
          {/* {console.log(props.posts.all[0])} */}
          <Counter />
          <Controls />
        </div>
      );
    } else {
      return (
        <h2>Loading..</h2>
      );
    }
  }
}

// const Posts = (props) => {
//   // console.log(props.posts.all);
//   if (props.posts.all.length >= 1) {
//     console.log('now i can');
//     console.log(JSON.stringify(props.posts.all));
//     const postlist = props.posts.all.map((post) => {
//       return <a href={`/posts/${post.id}`} key={post.id}> <PostsItem key={post.id} post={post} /> </a>;
//     });

//     // if (props.posts.all.length >= 1) {
//     return (
//       <div id="posts">
//         <ul>
//           {postlist}
//         </ul>
//         {/* {JSON.stringify(props.posts)} */}
//         {/* Maybe some posts: {JSON.stringify(props.posts.all)} */}
//         {/* <Post /> */}
//         {/* {console.log(props.posts.all[0])} */}
//         <Counter />
//         <Controls />
//       </div>
//     );
//   } else {
//     return (
//       <h2>Loading..</h2>
//     );
//   }
// };

export default connect(mapStateToProps, { fetchPosts })(Posts);
