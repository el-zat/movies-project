import {Movie} from './Movie'

export function Movies (props) {
    const { movies = [] } = props

    return <div className="movies">
        {
            movies.length ? 
            (
                movies.map(movie => (
                    <Movie
                        key = {movie.imdbID}
                        title = {movie.Title}
                        year = {movie.Year}
                        type = {movie.Type}
                        poster = {movie.Poster}/>
                )) 
            ) : 
            <h4> Nothing found </h4>            
        }
    </div>
      
}
  


