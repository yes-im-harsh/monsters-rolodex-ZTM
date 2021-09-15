import React from 'react';
import './Card-List.styles.css'

export const CardList = (props) => {
    // console.log(props);
    // return (<div className="card-list">{props.children}</div>)
    return(<div className="card-list">
        {props.Monsters.map(Monster => (
            <h1 key={Monster.id}>
                {Monster.name}
            </h1>
        ))}
    </div>)

}