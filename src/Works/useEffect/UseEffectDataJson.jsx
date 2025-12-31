import React, { useEffect, useState } from 'react'

function UseEffectDataJson() {
    const [users, setUsers] = useState([]);
    console.log(`${users} userss`);

    const fetchUsers = async () => {
        try {
            const response = await fetch("data.json");

            const data = await response.json();

            setUsers(data);
        } catch (error) {
            console.log(error);


        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <div>
            <ul style={{listStyleType:"square"}} >
                {users.map(user => (
                    <li>
                        <li>Name : {user.name} </li>
                        <li>Email : {user.email} </li>
                        <img style={{width:"50px", height:"60px"}} src={user.image} alt={user.name}  />
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default UseEffectDataJson
