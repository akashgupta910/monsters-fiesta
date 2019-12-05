import React from 'react'
import './CSS/CardList.style.css';
import Card from './Card.component';

export default function CardList(props) {
    return (
        <div className="card-list">
            {props.monsters.map((monster) => <Card key={monster.id} monster={monster} /> )}    
        </div>
    )
}
