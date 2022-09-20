const ADD_BOOK = 'bookstore/books/ADD_BOOKS';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOKS';

const initialState = [{
  id: '0', title: 'Viaje al centro de la tierra', author: 'Erik', category: 'action',
},
{
  id: '1', title: 'How to programm in java 7', author: 'Federico', category: 'Romance',
}];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          category: action.category,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

// action creators
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

export { addBook, removeBook };
export default reducer;
