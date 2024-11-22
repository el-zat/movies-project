// export function Movie (props) {
//     return <div classNameName="movie card">
//         <h2>{props.imdbID} {props.title} {props.year} {props.imdbID} {props.type} {props.poster} </h2>
//     </div>
// }
export function Movie (props) {

    return <div className="movie card">

      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.title}</span>
          <span className="card-title">{props.year}</span>
          <span className="card-title">{props.type}</span>
        </div>
        <img src={props.poster} alt='poster'></img>
      </div>
 
  </div>
  
}