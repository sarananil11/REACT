import { createContext, useEffect, useState } from "react";

export const UserApiContext = createContext();

export const UserApiProvider = ({ children }) => {

    const [users, setUsers] = useState([]);// data will be object array so, [].
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);

            } catch (error) {
                console.error('Error fetching datas:', error);

            }
            finally {
                setLoading(false)
            }
        }

        fetchUser();
    }, []);

    return (
        <UserApiContext.Provider value={{ users, loading }}>
            {children}
        </UserApiContext.Provider>
    )
}