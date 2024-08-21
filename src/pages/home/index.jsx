import { useContext, useEffect, useState } from "react"
import { MenuMovies } from "../../constans/infoMovies"
import Navbar from "../../components/navbar"
import { apiMovie } from "../../constans/apiMovie"
import {ShopContext} from '../../Context/MovieContext'
import MovieList from "../../components/movieList"
import Footer from "../../components/footer"
import "./home.css"


const Home = () => {
    const {movieUpdate,nowShowing,singleMovie,seriesMovie,tvShow} = useContext(ShopContext)
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * MenuMovies.length));

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
            <Navbar id={0}/>
            <div className="container-banner">
                    <div className="video-container">
                        <video src={MenuMovies[randomIndex].video || ''} className="banner-video" autoPlay loop muted></video>
                    </div>
                    <div className="banner-info">
                        <img className="banner-logo" src={MenuMovies[randomIndex].img} alt="" />
                        <p className="banner-description">{MenuMovies[randomIndex].description}</p>
                        <div className="banner-action">
                            <a className="banner-btn-play" href="">
                                <i className="fa-solid fa-play"></i>
                                Phát
                            </a>
                            <a className="banner-btn-detail" href="" onClick={() => {event.preventDefault()}}>
                                <i className="fa-solid fa-circle-info"></i>
                                Chi Tiết
                            </a>
                        </div>
                    </div>
            </div>
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

export default Home