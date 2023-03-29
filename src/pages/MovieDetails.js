import React, { useState, useEffect } from "react";
import axios from "axios";
import Actor from "../components/Actor";
import { useHistory } from "react-router-dom";
import StarRating from "../components/StarRating";
import PlayButton from "../components/PlayButton";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MovieDetails = (props) => {
    const id = props.location.state.id;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const URL_CREDITS = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const URL_TRAILER = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const [detail, setDetail] = useState({});
    const [genres, setGenres] = useState([]);
    const [credits, setCredits] = useState([]);
    const [trailerKey, setTrailerKey] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const history = useHistory();

    useEffect(() => {
        axios.get(URL).then((res) => {
            setDetail(res.data);
            setGenres(res.data.genres);
        });
        axios.get(URL_CREDITS).then((res) => {
            setCredits(res.data.cast);
        });
        axios.get(URL_TRAILER).then((res) => {
            if (res.data.results && res.data.results.length > 0) {
                setTrailerKey(res.data.results[0].key);
                setVideoUrl(`https://www.youtube.com/watch?v=${res.data.results[0].key}`);
            }
        });
    }, [URL, URL_CREDITS, URL_TRAILER]);

    return (
        <React.Fragment>
            <Navigation />
            <PlayButton videoUrl={videoUrl} />
            <h1 className="h1-movieDetails">
                {detail.title}{" "}
                <div id="myStarRating" className="movieStar">
                    <StarRating />{" "}
                </div>
            </h1>

            <h4 className="h4-movieDetails">Released: {detail.release_date}</h4>

            <hr />
            <div className="details-container">
                <div class="movie_card" id="bright">
                    <div className="info_section">
                        <div
                            className="movie_header"
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})`,
                            }}
                        >
                            <img
                                className="locandina-m"
                                src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                                alt="poster"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {genres.map((g) => {
                return (
                    <p className="type"
                        onClick={() => history.push('/categories', { id: g.id, name: g.name })}
                    >{g.name}</p>
                )
            })}
            <div className="movie_desc">
                <p className="text">{detail.overview}</p>
            </div>


            <div className="leadingCast">
                <p className="textActor">Leading Cast</p>
                <ul className="actors_desc">
  {credits.slice(0, 6).map((credit) => (
    <li key={credit.id}>
      <Actor
        actor={credit}
        onClickActor={() => history.push("/actorDetails", { id: credit.id })}
      />
      <div className="leading-cast-name">
        <bold>{credit.name}</bold>
      </div>
      
    </li>
    
  ))}
</ul>

            </div>
            <Footer />

        </React.Fragment>

    )
}

export default MovieDetails;
