import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/MovieContext"
import Navbar from "../../components/navbar"
import { apiMovie } from "../../constans/apiMovie"
import MovieList from "../../components/movieList"
import Footer from "../../components/footer"
import GenreMovie from "../../components/genre"
import "./movie.css"

const Movie = () => {
    const {movieUpdate,nowShowing,singleMovie,seriesMovie,tvShow} = useContext(ShopContext)
    const getApiData = (api) => {
        switch (api) {
            case "movieUpdate":
                return movieUpdate;
            case "nowShowing":
                return nowShowing;
            case "singleMovie":
                return singleMovie;
            case "seriesMovie":
                return seriesMovie;
            case "tvShow":
                return tvShow;
        }
    }

    return (
        <>
            <Navbar id ={1}/>
            <GenreMovie />
            <div className="container-content">
                {apiMovie.map((item,index)=> (
                    <MovieList 
                        key={index}
                        title={item.title} 
                        api={getApiData(item.api)}
                        url={item.url}
                    />
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default Movie