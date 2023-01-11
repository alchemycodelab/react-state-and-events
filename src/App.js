import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Controls from './components/Controls';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [animal, setAnimal] = useState('pig');
  const [animals, setAnimals] = useState(['pig']);
  return (
    <div className="App">
      <Counter />
      <div className="animal-container">
        <Controls animal={animal} setAnimal={setAnimal} setAnimals={setAnimals} />
        <Display animal={animal} />
      </div>
      <h2>History of Animals</h2>
      <ul>
        {animals.map((a) => {
          return <li key={a}>{a}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
