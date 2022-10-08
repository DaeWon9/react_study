import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Login /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
