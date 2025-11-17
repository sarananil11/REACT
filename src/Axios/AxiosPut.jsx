import axios from 'axios';
import React, { useState } from 'react'
// import { resolveConfig } from 'vite';

function AxiosPut() {
    const [message,setMessage]= useState("");

    const updateUser = async () => {
        try {
            const response = await axios.put(
                "https://jsonplaceholder.typicode.com/users/1",
                {
                    name:"Updated User",
                    email:"updated@example.com"
                }
            )
            setMessage("User updated succesfully!")
            console.log(response.data)
        } catch (error) {
            console.error("PUT error",error);
            
        }
    }
  return (
    <div>
      <h2>Axios PUT example</h2>
      <button onClick={updateUser}>Update User</button>
      <p>{message}</p>
    </div>
  )
}

export default AxiosPut
