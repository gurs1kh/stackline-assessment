import React from 'react';
import logo from './assets/images/stackline_logo.jpg';
import { ProductPage } from './pages/Product'
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <header className="stackline-header">
        <img src={logo} className="stackline-logo" alt="logo" />
      </header>
      <ProductPage />
    </div>
  )
}
