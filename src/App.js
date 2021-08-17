import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/style.css';
import ChildComponent from './components/ChildComponent';
import TaskList from './components/TaskList';

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
      <h2 className="name">Welcome to React JS</h2>
      {/* <ChildComponent name={name} address={address} setName={(val) => anotherFunc(val)} /> */}
      <TaskList />
    </div>
  );
}

export default App;
