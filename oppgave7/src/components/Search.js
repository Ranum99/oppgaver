const Search = ({ search, setSearch, handleSubmit }) => {

    const handleChange = (evt) => {
        setSearch(evt.currentTarget.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Søk
                <input value={search} onChange={handleChange} type="text"></input>
            </label>
            <button type="submit">Søk</button>
        </form>
    )
}

export default Search