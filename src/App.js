import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://reqres.in/api/users');
      console.log(response)
      setUsers(response.data.data);
    })();
  }, []);

  const onChangeHandler = text => {
    setText(text);
  }

  return (
    <div className="app">
      <input type="text" 
      onChange={ e => onChangeHandler(e.target.value) }
      value={ text }
      />
    </div>
  );
}

export default App;
