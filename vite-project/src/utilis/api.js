import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGNjZDMwNTI5YWRjODNlYjY5NjQ0N2JiYmZmMTMzOCIsInN1YiI6IjY1Njg0NWVlZmI1Mjk5MDExZjcwYmNlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eD5AL8x4RBW_K1SLGtll2HHt7OK85_7Gx-yZU_oDkdw";

const headers = {
    Authorization : "bearer "+ TMDB_TOKEN,
};

export const fetchDataApi = async(url,params)=>{

    try{
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data;
    }catch(err){
        console.log(err)
        return err
    }
}