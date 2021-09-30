import { useState } from "react"

import Movies from './Movies'
import Search from './Search'

const Main = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=405b184c`)

        if (response.ok) {
            const data = await response.json();
            
            return { success: true, data }
        } else
        return { success: false, error: 'Noe gikk galt' }

    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        let data = await getMovies();

        setMovies( data?.data )
    }

    return (
        <main>
            <Search search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
            <Movies movies={movies.Search} />
        </main>
    )
}

export default Main