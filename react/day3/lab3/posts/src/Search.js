import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const posts = useSelector(state => state.posts);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredPosts.map(post => (
        <div className="post-card" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 100) + '...'}</p>
          <a href={`/posts/${post.id}`} className="btn">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Search;
