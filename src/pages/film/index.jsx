import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../../Context/MovieContext"
import axios from 'axios';
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import ItemRight from "../../components/itemRight"
import pictrue from "../../assets/1.jpg"
import starOnl from "../../assets/star-on.png"
import starOff from "../../assets/star-off.png"
import starHalf from "../../assets/star-half.png"
import "./film.css"


const Film = () => {
    const {movieUpdate} = useContext(ShopContext)
    const [infoFilm,setInfoFilm] = useState([]);
    const [category,setCategory] = useState('');
    const [year,setyear] = useState('');
    const [country,setCountry] = useState('');
    const [genre,setGenre] = useState([]);
    const [casts,setCasts] = useState([]);



    const nameFilm = useParams().name;
    console.log(casts)
    useEffect(() => {
        const getDataInfoFilm = async () => {
            try {
                const inFoFilm = await axios.get(`https://phim.nguonc.com/api/film/${nameFilm}`)
                const category = inFoFilm.data.movie.category
                const nameCategory = category && category['1'] && category['1'].list[0].name
                const year = category && category['3'] && category['3'].list[0].name
                const country = category && category['4'] && category['4'].list[0].name
                const genre = category?.['2']?.list?.map(item => item.name);
                // const casts = category?.casts
                const casts = inFoFilm && inFoFilm.data.movie.casts && inFoFilm.data.movie.casts.split(', ');

                setInfoFilm(inFoFilm.data.movie)
                setCategory(nameCategory)
                setyear(year)
                setCountry(country)
                setGenre(genre)
                setCasts(casts)

            } catch (error) {
                console.log(error);
            }
        }
        getDataInfoFilm();
    },[])

    const dataMovieUpdate = movieUpdate.slice(0,10);
    return (
        <>
            <Navbar/>
            <div className="film-container">
                <div className="film-title">
                    <ul>
                        <li>
                            <a href="">Xem phim</a>
                        </li>
                        <li>
                            <a href="">{category}</a>
                        </li>
                        <li className="film-name">{infoFilm.name}</li>
                    </ul>
                </div>
                <div className="film-content">
                    <div className="film-background">
                        <div className="film-content-image">
                            <a href="">
                                <img src={infoFilm.poster_url} alt="" title={infoFilm.name} />    
                            </a>
                            <ul>
                                <li>
                                    <a href="">Tải phim</a>
                                </li>
                                <li>
                                    <a href="">Xem phim</a>
                                </li>
                            </ul>
                        </div>
                        <div className="film-content-title">
                            {infoFilm.name && (
                                <h1>
                                    <span>{infoFilm.name}</span>
                                </h1>
                            )}
                            {infoFilm.original_name && (
                                <h2>
                                    <span>{infoFilm.original_name}</span>
                                </h2>
                            )}
                            <dl className="film-title-note">
                                <dt>Trạng thái:</dt>
                                {infoFilm.language && (
                                    <dl>
                                        <span>{infoFilm.language}</span>
                                    </dl>
                                )}
                                <dt>Đạo diễn:</dt>
                                {
                                   
                                (infoFilm.director && (
                                    <dl>
                                        <a href="">{infoFilm.director}</a>
                                    </dl>
                                ))
                                ||
                                <p>đang cập nhật</p>
                                }
                                <dt>Thời lượng:</dt>
                                {infoFilm.time && (
                                    <dl>{infoFilm.time}</dl>
                                )||<p>đang cập nhật</p>}
                                <dt>Số tập:</dt>
                                {infoFilm.total_episodes && (
                                    <dl>{infoFilm.total_episodes}</dl>
                                ) ||<p>đang cập nhật</p>}
                                <dt>Tình trạng:</dt>
                                {infoFilm.current_episode && (
                                    <dl>{infoFilm.current_episode}</dl>    
                                )||<p>đang cập nhật</p>}
                                <dt>Ngôn ngữ:</dt>
                                {infoFilm.language && (
                                    <dl>{infoFilm.language}</dl> 
                                )||<p>đang cập nhật</p>}
                                <dt>Năm sản xuất:</dt>
                                <dl>{year}</dl> 
                                <dt>Quốc gia:</dt>
                                <dl>
                                    <a href="">{country}</a>
                                </dl> 
                                <dt>Thể loại:</dt>
                                <dl>
                                    {genre && genre.map((item,index) => (
                                        <a key={index} href="">{item}</a>
                                    )) ||<p>đang cập nhật</p>}
                                </dl> 
                                <dt>Diễn viên:</dt>
                                <dl>
                                    {casts && casts.map((item,index) =>(
                                        <a key={index} href="">{item}</a>
                                    )) ||<p>đang cập nhật</p>}
                                </dl> 
                            </dl>
                            <div className="film-content-share">
                                <div className="film-content-network">
                                    <button>
                                        <i className="fa-solid fa-thumbs-up"></i>
                                        Like 0
                                    </button>
                                    <button>share</button>
                                    <button>
                                        <i className="fa-solid fa-bookmark"></i>
                                        save to facebook
                                    </button>
                                </div>
                                <div className="film-content-vote">
                                    <div className="vote-star">
                                        <img src={starOnl} alt="1" title="7/10" />
                                        <img src={starOnl} alt="2" title="7/10" />
                                        <img src={starOnl} alt="3" title="7/10" />
                                        <img src={starOnl} alt="4" title="7/10" />
                                        <img src={starOnl} alt="5" title="7/10" />
                                        <img src={starOnl} alt="6" title="7/10" />
                                        <img src={starOnl} alt="7" title="7/10" />
                                        <img src={starHalf} alt="8" title="7/10" />
                                        <img src={starOff} alt="9" title="7/10" />
                                        <img src={starOff} alt="10" title="7/10" />
                                    </div>
                                    <div className="vote-score">
                                        (
                                        <span>7.3 </span>
                                        điểm /
                                        <span> 7 </span>
                                        lượt   
                                        )

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="film-propose">
                        <div className="right-content">
                            <div className="caption-content">
                                Phim mới cập nhật
                            </div>
                            <ul className="right-content-list">
                                {dataMovieUpdate.map((item,index) => (
                                    <ItemRight key={index} data={item}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Film