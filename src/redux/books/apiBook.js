import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_ARR_BOOK, ADD_BOOK, REMOVE_BOOK } from './books';

const UNIQ_ID = 'IUmpICCqFqLeGrbCEOb9';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${UNIQ_ID}/books/`;

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

  // Dear reviewer this consoles I want to keep them
  // because this broyect will help me to use it in
  // the next projects, I want to know how did I retreive
  // the data.
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

  // Dear reviewer this consoles I want to keep them
  // because this broyect will help me to use it in
  // the next projects, I want to know how did I retreive
  // the data.
  const { status } = response;
  console.log(response);
  console.log(status);

  return newBook;
});

export const removeBooksApi = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const head = { 'Content-type': 'application/json; charset=UTF-8' };

  const response = await fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: head,
  });

  // Dear reviewer this consoles I want to keep them
  // because this broyect will help me to use it in
  // the next projects, I want to know how did I retreive
  // the data.
  const { status } = response;
  console.log(response);
  console.log(status);

  return id;
});
