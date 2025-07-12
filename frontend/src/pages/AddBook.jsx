// Example: AddBook.jsx
import React, { useState } from 'react';
import { saveBook } from './utils/localBooks';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveBook({ title, author });
    setTitle('');
    setAuthor('');
    alert('Book saved locally!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <button type="submit">Save Book</button>
    </form>
  );
}

export default AddBook;