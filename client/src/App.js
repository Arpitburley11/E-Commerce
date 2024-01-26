import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Products from './Pages/Products';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/products/:id' element={<Products/>} />
      </Routes>
  );
}

export default App;
