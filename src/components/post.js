/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import marked from 'marked';
import { connect } from 'react-redux';
import { fetchPost, updatePost, deletePost } from '../actions/index';
// deletePost, updatePost

function mapStateToProps(reduxState) {
  console.log('in post mapstatetoprops');
  console.log(reduxState.posts.current);
  return {
    // posts: reduxState.posts,
    currentPost: reduxState.posts.current,
  };
}

class Post extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.postID,
      title: ' ',
      tags: ' ',
      coverUrl: ' ',
      content: ' ',
      edit: false,
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  delPost = (event) => {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  editPost = (event) => {
    this.setState({
      title: this.props.currentPost.title,
      tags: this.props.currentPost.tags,
      coverUrl: this.props.currentPost.coverUrl,
      edit: true,
    });
    console.log('now editing');
    console.log(this.props.currentPost.title);
    // this.props.fetchPost(this.props.match.params.postID);
  }

  stopEdit = (event) => {
    this.setState({ edit: false });
    this.props.updatePost(this.state);
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

  onContentChange = (event) => {
    this.setState({ content: event.target.value });
  }

  editRender = (event) => {
    return (
      <div id="newPost">
        <div>
          <h2>Title:</h2>
          <input id="title" type="text" onChange={this.onTitleChange} value={this.state.title} />
        </div>
        <div>
          <h2>coverUrl:</h2>
          <input id="coverURL" type="text" onChange={this.onCoverChange} value={this.state.coverUrl} />
        </div>
        <div>
          <h2>Content:</h2>
          <input id="content" type="text" onChange={this.onContentChange} value={this.state.content} />
        </div>
        <div>
          <h2>Tags:</h2>
          <input id="Tags" onChange={this.onTagChange} value={this.state.tags} />
        </div>
        <button id="submit" type="submit" onClick={this.stopEdit}>Finish</button>
        {/* <button type="submit" onClick={(e) => this.newNote(this.state.searchterm, e)}>Create Note</button> */}
      </div>
    );
  }

  render() {
    console.log('redering nonedit');
    console.log(this.props.currentPost.title);
    if (this.state.edit === true) {
      return this.editRender();
    } else {
      return (
        <div>
          <div id="post">
            <h2> {this.props.currentPost.title} </h2>
            <h3 id="content"> {this.props.currentPost.content} </h3>
            <div className="coverURLpost" dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.coverUrl || '') }} />
            {/* <div> {this.props.posts.current.coverUrl} </div> */}
            <h3 id="tags">Tags: {this.props.currentPost.tags} </h3>
          </div>
          <div id="buttons">
            <button id="delete" type="submit" onClick={this.delPost}>Delete Post</button>
            <button id="delete" type="submit" onClick={this.editPost}>Edit Post</button>
          </div>
        </div>
      );
    }
    // return (
    //   <div>
    //     <div id="post">
    //       <h2> {this.props.currentPost.title} </h2>
    //       <div className="coverURLpost" dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.coverUrl || '') }} />
    //       {/* <div> {this.props.posts.current.coverUrl} </div> */}
    //       <h3>Tags: {this.props.currentPost.tags} </h3>
    //     </div>
    //     <div id="buttons">
    //       <button id="delete" type="submit" onClick={this.delPost}>Delete Post</button>
    //       <button id="edit" type="submit" onClick={this.editPost}>Edit Post</button>
    //     </div>
    //   </div>
    // );
  }
}


// enables this.props.currentPost
// and this.props.fetchPost, this.props.deletePost, and this.props.updatePost
export default connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post);
// deletePost, updatePost
