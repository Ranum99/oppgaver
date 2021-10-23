import Layout from "./components/layout";

export default function Form() {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt.currentTarget);
    }

    return (
        <Layout>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input type="text" />
                </label>
                <label>Email
                    <input type="email" />
                </label>
                <label>Password
                    <input type="password" />
                </label>
                <button type="submit">Sign up</button>
            </form>
        </Layout>
    )
}