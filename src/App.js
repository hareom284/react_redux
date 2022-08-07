import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Product from './components/Products';
import Card from './components/Card';
import { useSelector } from 'react-redux';
function App() {
  const product = useSelector((state) => state.card)
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h4>Product Items</h4>
        </Link>
        <div>
          <Link to="/card">Items: {product.length}</Link>
        </div>
      </header>
      <div className="">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
