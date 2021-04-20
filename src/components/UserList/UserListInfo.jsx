import React, { useState, useEffect } from "react";
import axios from 'axios';

import Inventory from '../Inventory';

const UserInfo = (props) => {
    const { user } = props;

    return (
        <>
            <h4>User info</h4>
            <p>ID: { user.id } </p>
            <p>Name: { user.name } </p>

            { (user.items && user.items.length) ? <Inventory items={user.items}/> : <h4>No items in inventory</h4> }
        </>
    )
}

export default (props) => {
    const { userId } = props;

    const [data, setData] = useState({ isLoading: true, user: null});

    if(!userId) {
        return <h4>No data</h4>
    }

    useEffect(async () => {
        setData({ isLoading: true});

        const response = await axios(`http://127.0.0.1:3001/user/${userId}`);
        
        setData({ 
            isLoading: false,
            user: response.data
        })
    }, [userId]);

    return (
        <>
            
            { data.isLoading ? <b>Loading...</b> : <UserInfo user={ data.user }/> }
        </>
    )
}