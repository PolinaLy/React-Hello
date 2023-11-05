import './App.css';
import {External} from './External.js';
import { useState } from 'react';

function App() {
  const [value, valueChange] = useState(0);

  return (
    <div className="App">
      <h1>Hello World!</h1>

      <div>
        <p className="Text">Хук 1: useState</p>
        {value}
        <button onClick={() => valueChange(value + 1)}>
          Увеличить значение на 1
        </button>
      </div>
    <div><External /></div>
      
    </div>
  );
}

export default App;
