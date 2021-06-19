import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get('https://reqres.in/api/users');
      console.log(response)
      setUsers(response.data.data);
    })();
  }, [])

  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default App;
