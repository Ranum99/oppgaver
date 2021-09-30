import './css/Movie.css';

const Movie = ({ movie }) => {
    return (
        <article>
            <img alt={movie.Title} src={movie.Poster} />
            <h2>{movie.Title}</h2>
            <div>
                <p>Year: {movie.Year}</p>
                <p>imdbID: {movie.imdbID}</p>
            </div>
        </article>
    )
}

export default Movie