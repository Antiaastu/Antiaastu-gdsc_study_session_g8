// App.jsx
import React from 'react';
import ShoppingCart from './Shop/ShoppingCart';
import './Shop/Shop.css'; // Import your CSS file

const App = () => {
  return (
    <div className="App">
      <div className="shopping-cart-container">
        <ShoppingCart />
      </div>
    </div>
  );
};

export default App;
