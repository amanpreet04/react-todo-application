import React, { useState } from 'react';
import './AddButton.css'; // Import the CSS file for styling

export default function AddButton({ onAdd }) {
  return (
    <button onClick={onAdd} className="add-button">
      Add
    </button>
  );
}

