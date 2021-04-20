import React from "react";

export default (props) => {
    const { users, onChangeUserId, onChangeUserName } = props;

    if(!users || users.length === 0) {
        return <h4>No data</h4>
    }

    function changeUserName(userId, currentName) {
        const name = prompt('Type new name', currentName);

        if(name && name.length > 0) {
            onChangeUserName(userId, name);
        }
    }

    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { users.map(user => 
                    <tr key={ user.id }>
                        <td>{ user.id }</td>
                        <td>{ user.name }</td>
                        <td>
                            <button onClick={() => onChangeUserId(user.id)}>View</button>
                            <button onClick={() => changeUserName(user.id, user.name)}>Change Name</button>
                        </td>
                    </tr>
                ) }
            </tbody>
        </table>
    )
}