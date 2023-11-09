import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import ForgetPassword from './pages/ForgetPassword';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Customers from './pages/Customers';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path='customers' element={<Customers />}></Route>
          <Route path='product-list' element={<ProductList />}></Route>
          <Route path='product' element={<AddProduct />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
