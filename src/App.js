import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const submissionValues = (event) => {
    event.preventDefault();
    alert(`Name entered was: ${name}`)
  }

  return()
}

export default App;
