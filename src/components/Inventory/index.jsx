import React from "react";

import './index.css';

import InventoryItem from './InventoryItem';

export default (props) => {

    const { items } = props;

    return (
        <div className="inventory">
        { items.map(item => 
            <InventoryItem item={item} key={item.id}/>
        ) }
        </div>
    )
}