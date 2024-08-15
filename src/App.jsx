import logo from './logo.svg';
import './css/style.scss';
import { useEffect, useState } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Main from './pages/main.jsx';

function App() {
  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;
