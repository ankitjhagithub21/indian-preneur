import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Emagazines from './pages/Emagazines';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import "./App.css"
import MagazineDetails from './pages/MagazineDetails';
import BlogDetails from './pages/BlogDetails';

const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path='/blogs/:id' element={<BlogDetails/>}/>
    <Route path='/magazines' element={<Emagazines/>}/>
    <Route path='/magazines/:id' element={<MagazineDetails/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App