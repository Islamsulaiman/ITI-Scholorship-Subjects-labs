import React, { useState } from 'react';

const Search = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

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
        </div>
      ))}
    </div>
  );
};

export default Search;
