import { useState,useEffect, useContext, memo } from "react"
import axios from '../../hooks/useAxios';
import { ShopContext } from "../../Context/MovieContext"

import "./movieList.css"
import { Link } from "react-router-dom";

const MovieList = (props) => {
    const movieUpdate = props.api
    const [starIndex ,setStarIndex] = useState(0)
    const [endIndex ,setEndIndex] = useState(7)
    const [isAnimating, setIsAnimating] = useState(false);
    const indexNext = movieUpdate.length - endIndex
    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 500); // Match the CSS transition duration
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);
    const handleToLeft = () => {  
        if (isAnimating) return;
        setIsAnimating(true);
        if(indexNext > 6) {
            setStarIndex(0) 
            setEndIndex(7) 
        }  else {
            setStarIndex((prev) => prev - 7) 
            setEndIndex((prev) => prev - 7) 
        }
        
    }

    const handleToRight = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        if(indexNext < 7) {
            setStarIndex(13) 
            setEndIndex(20) 
        } else {
            setStarIndex((prev) => prev + 7) 
            setEndIndex((prev) => prev + 7) 
        }
    }
 
    return (
        <div className="container-content-movie">
            <div className="content-movie">
                <a className="content-title" href="#">{props.title}</a>
                <Link className="content-seeAll" to={props.url}>
                    <i className="fa-solid fa-angles-right"></i>
                    Xem tất cả
                </Link>
            </div>
            <div className="content-movie-list">
                <button className="scroll-btn left"  onClick={handleToLeft}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                {movieUpdate.slice(starIndex, endIndex).map((item,index) => (
                    <Link key={index} className={`movie-item ${
                        isAnimating ? (index === 0 ? "slideOut" : "slideIn") : ""}`}to={`/film/${item.slug}`}>
                        <img className="movie-img" src={item.thumb_url} alt={item.name} title={item.name} />
                    </Link>
                ))}
               
                <button className="scroll-btn right" onClick={handleToRight}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}

export default memo(MovieList)