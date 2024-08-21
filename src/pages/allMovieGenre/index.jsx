import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import ItemMovie from "../../components/itemMovie"
import pictrue from "../../assets/1.jpg"
import axios from '../../hooks/useAxios';
import "./allGenre.css"
import { ShopContext } from "../../Context/MovieContext"


const AllMovieGenre = () => {
    const {movieUpdate,nowShowing,singleMovie,seriesMovie,tvShow} = useContext(ShopContext)
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const nameGenre = useParams().genre
    console.log(data)
    const title = (title) => {
        switch (title) {
            case "phim-moi-cap-nhat":
                return "Phim mới cập nhật"
            case "phim-dang-chieu":
                return "Phim đang chiếu"
            case "phim-le":
                return "Phim lẻ"
            case "phim-bo":
                return "Phim bộ"
            case "tv-show":
                return "TV Show"
        }
    }
    const dataAll = useMemo(() => async () => {
        try {
            if(nameGenre === 'phim-moi-cap-nhat') {
                const data = await axios.get(`/${nameGenre}?page=${page}`);
                setData((prevData) => [...prevData, ...data.items]);
            } else {
                const data = await axios.get(`danh-sach/${nameGenre}?page=${page}`);
                setData((prevData) => [...prevData, ...data.items]);
            }
        } catch (error) {
            console.log(error);
        }
    }, [nameGenre, page]);
    
    useEffect(() => {
        dataAll();
    },[nameGenre,page])


    const handleScroll = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        console.log('scrollTop',scrollTop);
        console.log('scrollHeight',scrollHeight);
        console.log('clientHeight',clientHeight);
        console.log('data.length > 0',data.length > 0);
        if (scrollTop + clientHeight >= scrollHeight - 100 && data.length > 0) {
            console.log('12345');
            setPage(page + 1);
        }
    }, [data, setPage]);
    console.log('page',page)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [data]);


    return <>
        <Navbar/>
        <div className="container">
            <p className="container-title">{title(nameGenre)}</p>
            <div className="all-movie-list">
                {data.map((item,index) => (
                    <ItemMovie id={index} src={item.thumb_url} alt={item.name} title={item.name} slug={item.slug} />
                ))}
            </div>
        </div>
        <Footer/>
    </>
}

export default AllMovieGenre