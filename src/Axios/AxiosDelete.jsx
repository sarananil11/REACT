import axios from 'axios';
import React, { useState } from 'react'

function AxiosDelete() {
    const [message,setMessage] = useState("");

    const deleteUser = async () => {
        try {
            await axios.delete("https://jsonplaceholder.typicode.com/users/1");

            setMessage("User deleted succesfully!")
        } catch (error) {
            console.error(`DELETE Error : ${error}`);
            
        }
    }
  return (
    <div>
      <h2>Axios DELETE Example</h2>
      <button onClick={deleteUser}>Delete User</button>
      <p>{message}</p>
    </div>
  )
}

export default AxiosDelete
