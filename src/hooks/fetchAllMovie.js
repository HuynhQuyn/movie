// import axios from "axios";
import axios from './useAxios';

const fetchAllMovie = () => {
    return axios.get("/phim-moi-cap-nhat?page=1")
}

    
export {fetchAllMovie};