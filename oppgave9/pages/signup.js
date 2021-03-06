import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import Layout from "./components/layout";

export default function Form() {
    const [user, setUser] = useState({name: "", email: "", password: ""})
    const [error, setError] = useState("")

    const handleSubmit = evt => {
        evt.preventDefault();
        if(user.name !== "" || user.email !== "" || user.password !== "") {
            setError("")
            try {
                const response = axios.post('api/users', {
                    name: user.name,
                    email: user.email,
                    password: user.password
                });
                if(!response?.data?.data) {
                    setError("User added")
                    setUser({name: "", email: "", password: ""})
                } else {
                    setError(response?.data?.error)
                }
            } catch (error) {
                setError(response?.data?.error)
            }
        } else
            setError("Fill in empty fields")
    }

    const handleChange = evt => {
        const {name, value} = evt.currentTarget;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <Layout>
            <Head>
                <title>Sign up</title>
            </Head>
            <h1>Sign up</h1>
            <p className="error">{error && `Message: ${error}`}</p>
            <form className="form" onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" onChange={handleChange} value={user.name} name="name" />
                </label>
                <label>Email:
                    <input type="email" onChange={handleChange} value={user.email} name="email" />
                </label>
                <label>Password:
                    <input type="password" onChange={handleChange} value={user.password} name="password" />
                </label>
                <button type="submit">Sign up</button>
            </form>
        </Layout>
    )
}