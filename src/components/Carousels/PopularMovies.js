import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../Movie";
import { useHistory } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRating from "../StarRating";

const PopularMovies = () => {
    // Backend
    const [popular, setPopular] = useState([]);
    const URL =
        "https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1";
    const history = useHistory();

    useEffect(() => {
        axios.get(URL).then((res) => setPopular(res.data.results));
    }, []);

    // Responsive carousel configuration
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 6,
            slidesToSlide: 6,
            additionalTransfrom: -200,
        },
        tablet: {
            breakpoint: { max: 1280, min: 800 },
            items: 3,
            slidesToSlide: 3,
            additionalTransfrom: -100,
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 2,
            slidesToSlide: 1,
            additionalTransfrom: -50,
        },
    };

    // Front-end
    return (

        <div className="popularMovies">

            <h1 className="h1-caroussels">Popular Movies</h1>
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item"
            >
                {popular.map((p) => (
                    <div className="movie-carousel-item">
                        <Movie movie={p} onClickMovie={() => history.push("/movieDetails", { id: p.id })} />
                        <StarRating rating={p.vote_average}/>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default PopularMovies;