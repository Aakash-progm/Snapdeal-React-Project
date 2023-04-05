import React, { useContext, useEffect, useState }  from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Home from './Home';
import Searchbar from './common/Searchbar';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import Login from './Login';
import NotFound from './NotFound';

export const globalContext = React.createContext();

function App() {
  const initialObj = {
    cartTemp : [],
    loginStatus : false,
    userName:'',
  }
  const [store, setStore] = useState(initialObj);

  useEffect(()=>{
    console.log('context -', store);

  },[store])

  return (
    <div className="">
      <BrowserRouter>
      <globalContext.Provider value={{store, setStore}}>
      <div className='container'>
        <Header/>
        <Navbar/>
        <Searchbar/>
        <Login/>
        <Routes>
          <Route path='/home' element ={<Home />} />
         <Route path='/product/:id' element ={<Product />} />
           <Route path='/cart' element ={<ShoppingCart/>} />
          <Route path='/checkout' element ={<Checkout/>} />
          <Route path='/login' element ={<Login/>} />
          {/*<Route path='/payment' element ={} />
          <Route path='/order' element ={} />
          <Route path='/register' element ={} />*/}

        </Routes>
        <Footer/>
      </div>
      </globalContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
