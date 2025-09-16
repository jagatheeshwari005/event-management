import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemList.css';

const ItemList = () => {
  // Load items from localStorage on initial render
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: ''
  });
  const navigate = useNavigate();
  
  // Save items to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.quantity) {
      setItems([...items, { ...formData, id: Date.now() }]);
      // Reset form
      setFormData({ name: '', description: '', quantity: '' });
    }
  };

  return (
    <div className="item-list-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className="item-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Add Item</button>
      </form>

      <div className="items-display">
        <h3>Items List</h3>
        {items.length === 0 ? (
          <p>No items added yet</p>
        ) : (
          <ul className="items-list">
            {items.map(item => (
              <li key={item.id} className="item-card">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <span>Qty: {item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ItemList;
