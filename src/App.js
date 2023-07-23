import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import AddProduct from './Component/AddProduct'
import UpdateProduct from './Component/UpdateProduct'
import Protected from './Component/Protected'
import Home from './Component/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Protected Cmp={Home} />} />
          <Route path='/add' element={<Protected Cmp={AddProduct} />} />
          <Route path='/update/:id' element={<Protected Cmp={UpdateProduct} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
