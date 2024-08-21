import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Movie from './pages/movie'
import Country from './pages/country'
import MyList from './pages/mylist'
import NewMovie from './pages/newmovie'
import MovieGenre from './pages/movieGenre'
import AllMovieGenre from './pages/allMovieGenre'
import Film from './pages/film'


function App() {


  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/movie/:genre' element={<MovieGenre/>}/>
            <Route path='/film/:name' element={<Film/>}/>
            <Route path='/all/:genre' element={<AllMovieGenre/>}/>
            <Route path='/newMovie' element={<NewMovie/>}/>
            <Route path='/mylist' element={<MyList/>}/>
            <Route path='/country' element={<Country/>}/>
        </Routes>
    </div>
  )
}

export default App
