import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput/TextInput'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TextInput />
    </div>
  );
}


export default App
