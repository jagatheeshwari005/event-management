import React from 'react';
import Content from './Content';
import List from './List';
import './Homepage.css';

const HomePage = () => {
  return (
    <main className="homepage">
      <div className="home-container">
        <Content />
        <List />
      </div>
    </main>
  );
};

export default HomePage;
