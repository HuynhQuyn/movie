import { useContext } from "react"
import Navbar from "../../components/navbar"
import MovieList from "../../components/movieList"
import { apiMovie } from "../../constans/apiMovie"
import { ShopContext } from "../../Context/MovieContext"
import Footer from "../../components/footer"


const MyList = () => {
    const {movieUpdate} = useContext(ShopContext)
    console.log(movieUpdate)
    return (
        <>
            <Navbar id={2}/>
            <div className="container-content" style={{ marginTop: 50 }}>
                <MovieList 
                    key={0}
                    title={apiMovie[0].title} 
                    api={movieUpdate}
                    url={apiMovie[0].url}
                />
            </div>
            <Footer/>
        </>
    )
}

export default MyList