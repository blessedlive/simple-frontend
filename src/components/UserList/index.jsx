import React, { useState, useEffect } from "react";
import UserListTable from './UserListTable';
import UserListInfo from './UserListInfo';

import './index.css';

import axios from 'axios';

export default () => {

    const [data, setData] = useState({ isLoading: true, users: null});
    const [userId, setUserId] = useState(null);

    useEffect(async () => {
        setData({ isLoading: true});
        
        const response = await axios('http://127.0.0.1:3001/user/list');
        setData({ 
            isLoading: false,
            users: response.data
        })
    }, []);

    async function setUserName(userId, name) {
        const response = await axios.post(`http://127.0.0.1:3001/user/${userId}/change-name`, { name });
        setData({
            users: data.users.map(user => user.id === userId ? {...user, name } : user)
        })
    }

    return (
        <>
            <h4>UserList</h4>
            { data.isLoading 
                ? <b>Loading...</b> 
                : <UserListTable 
                    users={ data.users }
                    onChangeUserId={(userId) => setUserId(userId)} 
                    onChangeUserName={(userId, name) => setUserName(userId, name)} 
                    /> 
                }
            <hr/>
            { userId && <UserListInfo userId={ userId }/> }
        </>
    )
}