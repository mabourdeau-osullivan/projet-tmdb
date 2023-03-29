import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Carousel from "react-multi-carousel";
import Movie from "../Movie";

const SearchByActors = () => {
  const [popular, setActors] = useState([]);
  const API_KEY = "8434a0b660ab72dea068e0d5edd42503";
  const URL = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const history = useHistory();

  useEffect(() => {
    axios.get(URL).then((res) => setActors(res.data.results));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
      additionalTransfrom: -200,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
      additionalTransfrom: -100,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      additionalTransfrom: -50,
    },
  };

  return (
    <div className="searchByActors">
      <h1 className="h1-caroussels">Search by actors</h1>
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
            <Movie
              movie={{
                id: p.id,
                title: p.name,
                release_date: p.known_for_department,
                poster_path: `https://image.tmdb.org/t/p/w150_and_h150_face${p.profile_path}`,
              }}
              onClickMovie={() =>
                history.push("/actorDetails", { id: p.id })
              }
            />
          </div>
        ))}
      </Carousel>
      <style>{`
        .searchByActors img {
          border-radius: 50%;
          height: 120px;
          width: 120px;
        }
      `}</style>
    </div>
  );
};

export default SearchByActors;

