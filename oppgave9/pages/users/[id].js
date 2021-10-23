import Layout from "../components/layout";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
    const [user, setUser] = useState({id: 0, name: "", email: "", password: ""})
    const router = useRouter()
    const { id } = router.query

    const getUserdata = async () => {
        try {
            const response = await axios.get('/api/users', {id: id})

            if(response?.data?.success) {
                setUser(response.data.data[0]);
                console.log(response.data.data[0]);
            }
        } catch (error) {
            console.log(error?.response?.data)
        }
    }

    useEffect(() => {
        getUserdata();
    }, [])

    return (
        <Layout>
            <h1>Single user</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </Layout>
    )
}