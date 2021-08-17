import React, {useState} from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

function App() {

  const [name, setName] = useState("Maniruzzaman Akash");

  const [address, setAddress] = useState({
    city: 'Dhaka',
    area: 'Dhaka-1212'
  })

  const anotherFunc = (val) => {
    setName(val);
  }

  return (
    <div className="App">
      <h2>Welcome to React JS</h2>
      <ChildComponent name={name} address={address} setName={(val) => anotherFunc(val)} />
    </div>
  );
}

export default App;
