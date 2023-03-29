import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useHistory } from "react-router-dom";

const CategoriesMovies = (props) => {

    const { idGenre, nameGenre } = props;
    const [data, setData] = useState([]);
    const [id, setId] = useState();
    const [categories, setCategories] = useState([]);
    const idParam = idGenre ? idGenre : id;
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1&with_genres=${idParam}`;
    const URL_GENRES = "https://api.themoviedb.org/3/genre/movie/list?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US";   
    const history = useHistory();
    

    useEffect(() => {
        axios.get(URL).then((res) => setData(res.data.results));
        axios.get(URL_GENRES).then((res) => setCategories(res.data.genres));
    }, [idParam, URL]);

    const onChange = (event) => {
        setId(event.target.value);
    }

    return (
        <div className="categoriesMovies">
            {!idGenre && (
                <div className="sort-container">
                <select value={id} onChange={onChange}>
                    <option>Sélectionnez une catégorie</option>
                    {categories.map(genre => {
                        return <option value={genre.id}>{genre.name}</option>
                    })}
                </select>
            </div>
            )}
            
            {idParam ? (
                <div>
                    <h1 className="titleCategory">{nameGenre}</h1>
                    <ul className="categoriesMovies-list">
                    {data.map((m) => (
                        <Movie movie={m} onClickMovie={() => history.push('/movieDetails', { id: m.id })}/>
                    ))}
                </ul>
                </div>
                
            ) : (
                <div className="placeholder-container">
                </div>
            )}
        </div>
    )
}

export default CategoriesMovies;
