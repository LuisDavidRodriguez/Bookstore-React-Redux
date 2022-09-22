import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_ARR_BOOK, ADD_BOOK } from './books';

const UNIQ_ID = 'IUmpICCqFqLeGrbCEOb9';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${UNIQ_ID}/books/`;

// eslint-disable-next-line import/prefer-default-export
export const getBooks = createAsyncThunk(ADD_ARR_BOOK, async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  // console.log('asynk');
  // console.log(data.item1);
  // console.log(data);

  const newArray = Object.keys(data).map((id) => {
    const obj = data[id][0];
    obj.id = id;
    return obj;
  });

  console.log(newArray);
  return newArray;
});

export const addBooksApi = createAsyncThunk(ADD_BOOK, async (newBook) => {
  // REMEMBER createAsyncThunk only in the async you can only pass 1 parameters
  // if you need to add more parameters you must pass them as object

  // this could be done easily because the newBook we have everything inside
  // so just JSON.stringify(newBook) but I want it to keep it like this
  // because in the case of the API it need strictly item_id and I just want to
  // worry about that here in this code where I call the API not in the whole code
  // where I create a new book or whatever
  const data = JSON.stringify({
    item_id: newBook.id,
    title: newBook.title,
    author: newBook.author,
    category: newBook.category,
  });

  const head = { 'Content-type': 'application/json; charset=UTF-8' };

  const response = await fetch(BASE_URL, {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: head,
    body: data,
  });
  const { status } = response;
  console.log(response);
  console.log(status);

  return newBook;
});
