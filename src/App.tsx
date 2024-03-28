import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Professionals from './pages/Professionals/Professionals';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sobre' element={<AboutPage />}></Route>
        <Route path='/produtos' element={<ProductsPage />}></Route>
        <Route path='/profissionais' element={<Professionals />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
