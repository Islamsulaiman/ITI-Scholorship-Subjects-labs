import React from 'react';

const Posts = (props) => {


  return (
    <div className="posts-container">
      {props.posts.map(post => (
        <div className="post-card" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
