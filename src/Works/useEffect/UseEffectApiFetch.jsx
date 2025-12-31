import React, { useEffect, useState } from 'react'

function UseEffectApiFetch() {
    console.log("data");
    
    //useState function
    const [users, setUsers] = useState([]);
    console.log(users, "userss");

    // function to fetch API
    const fetchUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com");
            // console.log(response);
            const data = await response.json();
            // console.log(data);
            setUsers(data);


        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li>
                        <li>Name : {user.name}</li>
                        <li>User name : {user.username}</li>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseEffectApiFetch;
