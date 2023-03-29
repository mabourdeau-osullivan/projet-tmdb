import React from "react";

const Movie = (props) => {
    const { movie, onClickMovie } = props;
    return (
      <div className="movie" onClick={onClickMovie}>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
        <div className="title">{movie.title}</div>
        <div className="conteneur"></div>
      </div>
    );
  };
  

export default Movie;