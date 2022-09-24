import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressPie from '../ProgressPie/ProgressPie';
// import { removeBook } from '../../redux/books/books';
import { removeBooksApi } from '../../redux/books/apiBook';
import './bookItem.scss';

const BookItem = (props) => {
  const {
    id,
    title,
    author,
    category,
  } = props;

  const dispatch = useDispatch();

  return (
    <li id={id} className="bookContainer">
      <article className="bookBody">
        <section className="infoBook">
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="author">{author}</p>

          <div className="buttonsContainer">
            <button className="btn1" type="button">Comments</button>
            <button className="btn1" type="button" onClick={() => dispatch(removeBooksApi(id))}>Remove</button>
            <button className="btn1" type="button">Edit</button>
          </div>
        </section>
        <div className="graphicContainer">
          <ProgressPie />
        </div>
      </article>
      <hr />
      <article className="bookFooter">
        <p className="bookFooter__title">Current Chapter</p>
        <p className="bookFooter__chapter">Chapter 19</p>
        <button className="btn2 mt-20" type="button">Update Progress</button>
      </article>
    </li>
  );
};

export default BookItem;

BookItem.defaultProps = {
  id: '0',
  title: '',
  author: '',
  category: '',
};

BookItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};
