import React from 'react';
import PropTypes from 'prop-types';
import ProgressPie from '../ProgressPie/ProgressPie';
import './bookItem.scss';

const BookItem = (props) => {
  const { id, title, author } = props;

  return (
    <li id={id} className="bookContainer">
      <article className="bookBody">
        <section className="infoBook">
          <p className="category">Category</p>
          <h3 className="title">{title}</h3>
          <p className="author">{author}</p>

          <div className="buttonsContainer">
            <button className="btn1" type="button">Comments</button>
            <button className="btn1" type="button">Remove</button>
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
        <button className="btn2" type="button">Update Progress</button>
      </article>
    </li>
  );
};

export default BookItem;

BookItem.defaultProps = {
  id: '0',
  title: '',
  author: '',
};

BookItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};
