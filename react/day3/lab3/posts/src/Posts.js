import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_POSTS', payload: data }))
      .catch(error => console.log(error));
  }, [dispatch]);

  return (
    <div className="posts-container">
      {posts.map(post => (
        <div className="post-card" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 100) + '...'}</p>
          <a href={`/posts/${post.id}`} className="btn btn-secondary">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Posts;
