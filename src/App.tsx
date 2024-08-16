import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Top from './components/Top';
import Navbar from './components/Navbar';
import Bottom from './components/Bottom';
import {NutritionCard} from './components/Card';
import LoginMenu from './components/LoginMenu';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Top/>
      <div className='angled-line'></div>
      <Bottom/>
    </div>
  );
}

export default App;
