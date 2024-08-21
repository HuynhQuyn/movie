import React, {createContext, useState, useEffect} from 'react'
import axios from '../hooks/useAxios';

export const ShopContext = createContext();

function ShopContextProvider(props) {
    const [movieUpdate, setMovieUpdate] = useState([]);
    const [nowShowing, setNowShowing] = useState([]);
    const [singleMovie, setSingleMovie] = useState([]);
    const [seriesMovie, setSeriesMovie] = useState([]);
    const [tvShow, setTvShow] = useState([]);


    useEffect(() => {
        const getMovieUpdate = async () => {
            try {
              const data  = await axios.get("/phim-moi-cap-nhat?page=1");
              const data1  = await axios.get("/phim-moi-cap-nhat?page=2");
              setMovieUpdate(data.items.concat(data1.items));
            } catch (error) {
              console.log(error)
            }
          };

        const getMovieNowShowing = async () => {
          try {
            const data  = await axios.get("/danh-sach/phim-dang-chieu?page=1");
            const data1  = await axios.get("/danh-sach/phim-dang-chieu?page=2");
            setNowShowing(data.items.concat(data1.items));
          } catch (error) {
            console.log(error)
          }
        };

        const getMovieSeriesMovie = async () => {
          try {
            const data  = await axios.get("/danh-sach/phim-le?page=1");
            const data1  = await axios.get("/danh-sach/phim-le?page=2");
            setSingleMovie(data.items.concat(data1.items));
          } catch (error) {
            console.log(error)
          }
        };

        const getMovieSingleMovie = async () => {
          try {
            const data  = await axios.get("/danh-sach/phim-bo?page=1");
            const data1  = await axios.get("/danh-sach/phim-bo?page=2");
            setSeriesMovie(data.items.concat(data1.items));
          } catch (error) {
            console.log(error)
          }
        };

        const getMovieTvShow = async () => {
          try {
            const data  = await axios.get("/danh-sach/tv-shows?page=1");
            const data1  = await axios.get("/danh-sach/tv-shows?page=2");
            setTvShow(data.items.concat(data1.items));
          } catch (error) {
            console.log(error)
          }
        };
        
        getMovieUpdate();
        getMovieNowShowing();
        getMovieSeriesMovie();
        getMovieSingleMovie();
        getMovieTvShow();
    }, []);

    const contextValue = {movieUpdate,nowShowing,singleMovie,seriesMovie,tvShow};
    return ( 
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
     );
}

export default ShopContextProvider;