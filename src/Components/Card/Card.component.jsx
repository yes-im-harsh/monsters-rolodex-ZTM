import React from 'react';
import './Card.styles.css'

export const Card = (props) => {
    return (
        <div className="Card-Container">
            <img alt="Robots" src={`https://robohash.org/${props.Monster.id}?set=set2&size=180x180`}></img>
            <h2>{props.Monster.name}</h2>
            <h4>{props.Monster.email}</h4>
        </div>
    )
}