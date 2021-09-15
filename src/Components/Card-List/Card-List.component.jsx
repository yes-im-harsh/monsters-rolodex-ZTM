import React from 'react';
import { Card } from '../Card/Card.component';
import './Card-List.styles.css'

export const CardList = (props) => {
    // console.log(props);
    // return (<div className="card-list">{props.children}</div>)
    return(<div className="card-list">
        {props.Monsters.map(Monster => (
            <Card key={Monster.id} Monster={Monster}/>
            //{Monster.name}
        ))}
    </div>)

}