import React from 'react';
import './Search-Box.styles.css'

export const SearchBox = ({ PlaceHolder, HandleChange }) => {
    return (
        <input
            className="Search-Box"
            type='search'
            placeholder={PlaceHolder}
            onChange={HandleChange}>

        </input>
    )
}