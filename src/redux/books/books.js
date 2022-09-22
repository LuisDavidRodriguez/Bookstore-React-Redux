/* eslint-disable prefer-template */
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const ADD_ARR_BOOK = 'bookstore/books/ADD_ARR_BOOK';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK + '/fulfilled':
      return [
        ...state,
        action.payload,
      ];

    case REMOVE_BOOK + '/fulfilled':
      return state.filter((item) => item.id !== action.payload);

    case ADD_ARR_BOOK + '/fulfilled':
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
};

// action creators
// this one was before use the createAsyncTunk
// const addArrBook = (arr) => ({
//   type: ADD_ARR_BOOK,
//   arrBook: arr,
// });

const addBook = (id, title, author, category) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
  category,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export {
  addBook,
  removeBook,
  ADD_ARR_BOOK,
  ADD_BOOK,
  REMOVE_BOOK,
};
export default reducer;
