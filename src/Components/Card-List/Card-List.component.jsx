import React from 'react';
import './Card-List.styles.css'

export const CardList = (props) => {
    // console.log(props);
    return (<div className="card-list">{props.children}</div>)
}