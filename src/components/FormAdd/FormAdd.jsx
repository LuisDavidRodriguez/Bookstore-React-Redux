import React, { useState } from 'react';

const FormAdd = () => {
  const [input] = useState();
  const [author] = useState();

  return (
    <form>
      <input id="title" type="text" placeholder="title" value={input} />
      <input id="author" type="text" placeholder="author" value={author} />
      <select>
        <option value="fiction">Fiction</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default FormAdd;
