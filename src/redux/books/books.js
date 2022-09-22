/* eslint-disable prefer-template */
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const ADD_ARR_BOOK = 'bookstore/books/ADD_ARR_BOOK';

const initialState = [{
  id: '0', title: 'Viaje al centro de la tierra', author: 'Erik', category: 'action',
},
{
  id: '1', title: 'How to programm in java 7', author: 'Federico', category: 'Romance',
}];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK + '/fulfilled':
      return [
        ...state,
        action.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.id);

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
};
export default reducer;
