import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import WorkSpace from './components/WorkSpace';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="workSpace" element={ <WorkSpace /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
