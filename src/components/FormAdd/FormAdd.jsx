import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../../redux/books/books';

const FormAdd = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('DEFAULT');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title === '' || author === '' || category === '' || category === 'DEFAULT') return;
    dispatch(addBook(nanoid(), title, author, category));
    setTitle('');
    setAuthor('');
    setCategory('DEFAULT');
  };

  return (
    <form>
      <input id="title" type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input id="author" type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option disabled selected value="DEFAULT">--select an option--</option>
        <option value="Fiction">Fiction</option>
        <option value="Romance">Romance</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
      </select>
      <button type="button" onClick={handleAdd}>ADD BOOK</button>
    </form>
  );
};

export default FormAdd;
