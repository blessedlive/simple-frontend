import React from "react";

import grades from '../../data/grades.js';

export default (props) => {

    const { item } = props;

    return (
        <div className="inventory--item">
            <img src={ item.image } alt={ item.name } style={{ border: `2px solid ${grades[item.grade].color}`}}/>
            <div className="info">
                <span className="name" style={{ color: grades[item.grade].color }}>
                    <span className="grade">{grades[item.grade].name}</span> { item.name }
                </span>
                <span className="description">{ item.description }</span>
            </div>
        </div>
    )
}