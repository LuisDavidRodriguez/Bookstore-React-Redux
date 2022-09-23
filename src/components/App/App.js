import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Books from '../books/Books';
import Categories from '../categories/Categories';
import NavBar from '../NavBar/NavBar';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
