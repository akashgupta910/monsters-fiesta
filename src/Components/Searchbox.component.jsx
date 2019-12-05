import React from 'react';
import './CSS/Searchbox.style.css';

export default function Searchbox({ placeholder, handleChange }) {
    return (
        <div className="searchbox">
            <input type="search" placeholder={ placeholder } onChange={ handleChange } />
        </div>
    )
}
