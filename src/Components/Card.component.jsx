import React from 'react';
import './CSS/Card.style.css';

export default function Card(props) {
    return (
        <div className="card">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set1&size=200x200`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}
