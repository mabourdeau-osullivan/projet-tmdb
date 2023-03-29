import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useHistory } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchMovie = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${query}`;
    const history = useHistory();

    useEffect(() => {
        axios.get(URL + "&page=1").then((res) => {
            setData(res.data.results);
            setTotalPages(res.data.total_pages);
        });
    }, [query, URL]);

    useEffect(() => {
        const requests = [];
        for (let i = 2; i <= totalPages && i <= 8; i++) {
            requests.push(axios.get(`${URL}&page=${i}`));
        }
        Promise.all(requests).then((responses) => {
            const results = responses.flatMap((res) => res.data.results);
            setData((prevData) => [...prevData, ...results]);
        });
    }, [URL, totalPages]);

    const onSearch = (event) => {
        setQuery(event.target.value);
    }

    return (
        <div className="searchMovie">
            <div className="input-container">
                <input
                    className="input"
                    placeholder="Find a movie"
                    onChange={onSearch}
                ></input>
                <i className="fas fa-search search-icon"></i>
            </div>
            {query ? (
                <ul className="searchMovie-list">
                    {data
                        .filter((m) => m.poster_path) // Only include movies with a poster path
                        .map((m) => (
                            <Movie key={m.id} movie={m} onClickMovie={() => history.push('/movieDetails', { id: m.id })} />
                        ))
                    }
                </ul>
            ) : (
                <div className="placeholder-container">
                </div>
            )}
        </div>
    )
}

export default SearchMovie;