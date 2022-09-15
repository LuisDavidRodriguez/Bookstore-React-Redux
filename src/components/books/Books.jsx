import React, { useState } from 'react';
import BookItem from '../BookItem/BookItem';
import FormAdd from '../FormAdd/FormAdd';
import './books.scss';

const Books = () => {
  const [books] = useState([{ id: '0', title: 'Panche villa', author: 'Erik' }, { id: '1', title: 'Juana la cubana', author: 'Federico' }]);

  const listBooks = books.map((item) => (
    <BookItem
      key={item.id}
      id={item.id}
      title={item.title}
      author={item.author}
    />
  ));

  return (
    <div className="booksContainer">
      <ul>
        {listBooks}
      </ul>
      <FormAdd />
    </div>
  );
};

export default Books;
