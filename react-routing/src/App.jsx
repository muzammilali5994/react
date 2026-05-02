import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from './Navbar';
import PNF from './pages/PNF'
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Dashboard/Profile';
import Setting from './pages/Dashboard/Setting';
import ProductsDetails from './pages/Products/ProductsDetails';
import Products from './pages/Products/Products';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='*' element={<PNF/>}/>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/dashboard' element={<Dashboard />} >
      
        <Route path='profile' element={<Profile/>}/>
        <Route path='setting' element={<Setting/>}/>
      
      </Route>
      <Route path='/products'element={<Products/>}/>  
      <Route path='/products/:id'element={<ProductsDetails/>}/>  
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;
