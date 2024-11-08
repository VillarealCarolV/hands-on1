
import { createContext } from 'react';
import './App.css';

import Calculator from './calculator/Calculator';



const LoginContext = createContext();

function App() {
  return (
 <div>
  <Calculator/>
 </div>
  
  );
}

export default App;
