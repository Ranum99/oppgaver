import Movie from './Movie'

import './css/Movies.css';

const Movies = ({ movies }) => {

    return (
        <section className="movies">
            {movies?.map((movie) => <Movie key={movie.imdbID} movie={movie} />)}
        </section>
    )
}

export default Movies