import React from "react";
import Navigation from "../components/Navigation";
import PopularMovies from "../components/Carousels/PopularMovies";
import TopRated from "../components/Carousels/TopRated";
import UpComing from "../components/Carousels/UpComing";
import SearchByActors from "../components/Carousels/SearchByActors";
import Footer from "../components/Footer";

const Popular = () => {
    return (
        <>
            <div className="menu">
                <Navigation />
            </div>
            <div className="caroussels">
                <PopularMovies />
                <TopRated />
                <UpComing />
                <SearchByActors />
            </div>
            <div className="footer">
            <Footer />
            </div>
        </>
    )
}

export default Popular;