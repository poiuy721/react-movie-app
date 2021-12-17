import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Movie from "../components/Movie";
function Home(){
    const [loading,setLoading]=useState(true);
    const [movies,setMovies]=useState([]);
    const getMovies=async()=>{
        const json=await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
        setMovies(json.data.movies);
        setLoading(false);
        }
    useEffect(()=>{
        getMovies();
    },[])
    console.log(movies);
    return (
        <div>
            <ul>
            {loading?(<h1>Loading..</h1>):(<div>{movies.map(movie=>
                <li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>
            )}</div>)
            }
            </ul>    
        </div>
    );
}
export default Home;