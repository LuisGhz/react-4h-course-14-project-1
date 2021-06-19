import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://reqres.in/api/users');
      console.log(response)
      setUsers(response.data.data);
    })();
  }, []);

  const onChangeHandler = text => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter(user => {
        const regex = new RegExp(`${text}`, 'gi');
        return user.email.match(regex);
      })
    }
    
    setSuggestions(matches)
    setText(text);
  }

  return (
    <div className="app container">
      <input type="text" className="col-md-12"
      onChange={ e => onChangeHandler(e.target.value) }
      value={ text }
      />
    </div>
  );
}

export default App;
