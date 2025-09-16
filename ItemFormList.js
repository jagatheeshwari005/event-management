import { useState } from "react";

export default function ItemFormList() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", quantity: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, formData]);
    setFormData({ name: "", description: "", quantity: "" });
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Item Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="description" className="block font-medium">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block font-medium">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              required
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Add Item
          </button>
        </form>
      </div>

      <h2 className="text-lg font-bold mt-6">Item List</h2>
      <ul className="mt-3 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
            <div>
              <strong>{item.name}</strong> (x{item.quantity})<br />
              <em>{item.description}</em>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
