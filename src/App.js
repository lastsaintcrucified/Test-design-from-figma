import React from 'react';

import Header from "../src/components/header/header.component";
import First from './components/1stPart/first/first.component';
import Second from './components/2ndPart/second/second.component';
import Third from './components/3rdPart/third/third.component';

import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <First/>
      <Second/>
      <Third/>
    </div>
  );
}

export default App;
