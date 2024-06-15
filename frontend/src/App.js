import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
import Checkout from './pages/checkout/Checkout';
import Error from './pages/error/Error';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import PrivateComponent from './components/PrivateComponent/PrivateComponent';
import Navbar from './components/navbar/Navbar';
import Orders from './components/Orders/Orders';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>


        <Route element={<PrivateComponent />} >
        <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/products/:productId/checkout" element={<Checkout />} /> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/error" element={<Error />} />
          <Route path="/placed" element={<Orders />} />
        </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
