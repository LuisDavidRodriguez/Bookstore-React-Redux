import { useSelector, shallowEqual } from 'react-redux';
import BookItem from '../BookItem/BookItem';
import FormAdd from '../FormAdd/FormAdd';
import './books.scss';

const Books = () => {
  const books = useSelector((state) => state.books, shallowEqual);

  const listBooks = books.map((item) => (
    <BookItem
      key={item.id}
      id={item.id}
      title={item.title}
      author={item.author}
      category={item.category}
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
