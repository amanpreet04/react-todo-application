import React, { useState } from 'react';
import AddButton from '../AddButton/AddButton';

export default function TextInput() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAdd = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, inputValue]);
        setInputValue('');
      }
    };
  
    return (
      <div className="text-input-container">
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Add todos here" 
          className="text-input"
        />
        <AddButton onAdd={handleAdd} />
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
  
