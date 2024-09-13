import React, { useState } from 'react';
import './NameInput.css';

function NameInput({ setName }) {

    const [ cardName, setCardName ] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('button hit with name: ', cardName)
        setName(cardName)
    }

  return (
    <div id='name-input-container'>
        <form id='name-input-form-parent' onSubmit={handleSubmit} >
            <input 
                id='card-name-input'
                type='text'
                placeholder='Enter Card Name'
                value={cardName}
                onChange={(e) => setCardName(e.target.value.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' '))} />
            <button
                id='card-name-form-button'
                type='submit'>Search</button>
        </form>
    </div>
  )
}

export default NameInput