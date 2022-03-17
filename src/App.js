import { useState } from 'react';
import './App.css';
import Advice from './components/escena/Advice';
import { Welcome } from './components/escena/Welcome';

function App() {
  
  const [start, setStart] = useState(0);
 
  return (
    <div className="App">
      {
        start === 0 ? <Welcome setStart={setStart}/> : <Advice/>
      }
    </div>
  );
}

export default App;