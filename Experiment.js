import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Experiment.css';

const Experiment = () => {
  const [activeTab, setActiveTab] = useState('counter');

  return (
    <div className="experiment-container">
      <h2>Experiments</h2>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'counter' ? 'active' : ''}`}
          onClick={() => setActiveTab('counter')}
        >
          Counter
        </button>
        <button 
          className={`tab ${activeTab === 'items' ? 'active' : ''}`}
          onClick={() => setActiveTab('items')}
        >
          Items List
        </button>
      </div>

      <div className="experiment-content">
        {activeTab === 'counter' ? (
          <div className="experiment-card">
            <h3>Counter Experiment</h3>
            <p>Experiment with a simple counter application.</p>
            <Link to="/counter" className="experiment-link">
              Go to Counter →
            </Link>
          </div>
        ) : (
          <div className="experiment-card">
            <h3>Items List Experiment</h3>
            <p>Try out the items list management system.</p>
            <Link to="/items" className="experiment-link">
              Go to Items →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experiment;
