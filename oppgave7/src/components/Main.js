import { useState } from "react"

import Movies from './Movies'
import Search from './Search'

const Main = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(`http://www.omdbapi.com/?t=${search}&apikey=405b184c`)
        const data = await response.json();

        console.log(data);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getMovies();
    }

    return (
        <main>
            <Search search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
            <Movies movies={movies} />
        </main>
    )
}

export default Main