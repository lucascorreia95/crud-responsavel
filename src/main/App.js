import React from 'react';
import Routes from './Routes';

import Header from '../components/header/HeaderBar';

import './style.css';

function App() {
  return (
    <div className='App'>
      <Header title='Responsáveis' />
      <Routes />
    </div>
  );
};

export default App;
