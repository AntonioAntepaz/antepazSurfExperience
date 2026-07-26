import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Search />
      <Categories />
      <FeaturedProducts /> 
      <ProductDetail /> 
      {/*  <AddProduct /> */}
      <Footer />
    </div>
  );
}

export default App;