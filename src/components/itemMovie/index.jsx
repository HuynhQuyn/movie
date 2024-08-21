import { Link } from "react-router-dom"
import "./itemMovie.css"

const ItemMovie = (props) => {
    console.log(props.slug)
    return <>
         <Link key={props.id} className="genre-movie-item" to={`/film/${props.slug}`}>
            <img className="genre-movie-img" src={props.src} alt={props.alt} title={props.title} />
        </Link>
    </>
}

export default ItemMovie