import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ActorDetails = (props) => {
  const id = props.location.state.id;
  const URL = `https://api.themoviedb.org/3/person/${id}?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios.get(URL).then((res) => {
      setDetail(res.data);
    });
  }, [id]);

  return (
    <div className="actor-details">
      <Navigation />
      <div className="details-container">
        <div className="info_section.actors">
          <div className="movie_header_actor">
            <div className="locandinaActors">
              <img src={`https://image.tmdb.org/t/p/w300/${detail.profile_path}`} alt={`${detail.name}`} />
            </div>
            <h1 className="h1-actorDetails">{detail.name}</h1>
            <h4 className="h4-actorDetails">Birthday: {detail.birthday}</h4>
            <span className="minutes">
              Place of birth : {detail.place_of_birth}
            </span>
          </div>
          <div className="actorBio">
            <p className="text">{detail.biography}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActorDetails;
