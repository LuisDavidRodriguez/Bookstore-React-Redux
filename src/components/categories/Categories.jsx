import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{status}</p>
      <button type="button" className="btn2" onClick={() => dispatch(checkStatus())}>Check Status</button>
    </div>
  );
};

export default Categories;
