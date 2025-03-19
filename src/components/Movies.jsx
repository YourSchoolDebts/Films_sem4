import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;
    return <div className="movies">
        {movies.length ? (
            movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
        ) : (
            <h5><h3>Not Found</h3>It's hard to find a black cat in a dark room... especially if there isn't one there! <img src="/images/whiteCat.png" className="img_cat" /></h5>
            
        )}
    </div>;
}
export { Movies };