
import React, { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setItemQuantity(parseInt(e.target.value));
  };

  const handlePriceChange = (e) => {
    setItemPrice(parseFloat(e.target.value));
  };

  const addToCart = () => {
    if (itemName && itemQuantity > 0 && itemPrice > 0) {
      const newItem = {
        name: itemName,
        quantity: itemQuantity,
        price: itemPrice,
      };
      setItems([...items, newItem]);
     
      setItemName('');
      setItemQuantity(0);
      setItemPrice(0);
    } else {
      alert('Please fill in all fields with valid values.');
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        <h3>Add Item</h3>
        <form>
          <label>
            Name:
            <input type="text" value={itemName} onChange={handleNameChange} />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              value={itemQuantity}
              onChange={handleQuantityChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={itemPrice}
              onChange={handlePriceChange}
            />
          </label>
          <button type="button" onClick={addToCart}>
            Add to Cart
          </button>
        </form>
      </div>

      <div>
        <h3>Cart</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Price: ${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
