const STATUS_CHECKED = 'bookstore/categories/CHECKED';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';

    default:
      return state;
  }
};

// action creators
export const checkStatus = () => ({
  type: STATUS_CHECKED,
});

export default reducer;
