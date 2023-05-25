import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Search from './Search';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="app-container">
      <h1>Search</h1>
      <Search posts={posts} />

      <hr />
      
      <h1>Posts</h1>
      <Posts posts={posts} />


    </div>
  );
}

export default App;
