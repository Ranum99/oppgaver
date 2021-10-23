import Layout from "./components/layout";
import axios from "axios"
import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const response = await axios('/api/users');
            
            if(response?.data?.success) {
                setUsers(response.data.data)
            }
        } catch (error) {
            console.log(error?.response?.data)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <Layout>
            <h1>All users</h1>
            <ul>
                {users?.map(user => 
                    <li key={user.name}>{user.name}</li>
                )}
            </ul>
        </Layout>
    )
}