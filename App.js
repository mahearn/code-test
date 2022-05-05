import React from 'react';
import Header from './components/header';
import SearchBar from './components/search-bar';
import Summary from './components/summary';
import Modal from 'react-modal';

import './App.css';

const App = () => {
  return (
    <div className='container container-border'>
      <Header />
      <SearchBar />
      <Summary />
    </div>
  );
};

export default App;
