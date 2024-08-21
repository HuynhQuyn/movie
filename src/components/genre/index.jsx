import { Link,useParams } from "react-router-dom"
import { useState, useMemo, useEffect } from "react"
import { Genre } from "./Genre"
import ItemMovie from "../itemMovie";
import axios from "../../hooks/useAxios";
import "./genre.css"

const GenreMovie = (props) => {
    const [active,setActive] = useState(false)
    const [page, setPage] = useState(1);
    const [dataGenre, setDataGenre] = useState([]);

    useEffect(() => {
        const getMovieGenre = async () => {
            try {
                const data = await axios.get(`/the-loai/${props.api}?page=${page}`);
                setDataGenre((prevData) => [...prevData, ...data.items]);
            } catch (error) {
                console.log(error);
            }
        };
        getMovieGenre();
    }, [props.api, page]);


    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // console.log('scrollTop',scrollTop)
        // console.log('scrollHeight',scrollHeight)
        // console.log('clientHeight',clientHeight)
        if (scrollTop + clientHeight >= scrollHeight - 100 && dataGenre.length > 0) {
        setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [dataGenre]);

    const handleMenuGenre = () => {
        setActive(!active)
    }

    const handleListGenre = () => {
        setDataGenre([])
        setPage(1)
    }

return (
    <>
        <div className="genre-container">
            <h1>Phim</h1>
            <div className="genre-button" onClick={handleMenuGenre}>
                Thể loại
                <i className="fa-solid fa-caret-down"></i>
                <div className={`genre-menu ${active ? "active" : ""}`}>
                    <ul className="genre-menu-list">
                        {Genre.map((item,index)=> (
                            <li key={index} 
                                className="genre-menu-item" 
                                onClick={handleListGenre}
                            >
                                <Link to={item.url}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        {props.genre && (
            <>
                <div className="genre-content">
                    <p className="genre-title">Phim theo chủ đề {props.title}</p>
                </div>
                <div className="wrap-movie-list">
                    {dataGenre.map((item, index) => (
                        <ItemMovie key={index} src={item.thumb_url} alt={item.name} title={item.name} slug={item.slug}/>
                        // <a key={index} className="genre-movie-item" href="#">
                        //     <img className="genre-movie-img" src={item.thumb_url} alt={item.name} title={item.name} />
                        // </a>
                    ))}
                </div>
            </>
        )}
    </>
    )
}

export default GenreMovie