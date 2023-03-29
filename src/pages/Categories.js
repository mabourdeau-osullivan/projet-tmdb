import React from "react";
import Navigation from "../components/Navigation";
import CategoriesMovies from "../components/CategoriesMovies";
import ActionMovies from "../components/Carousels/Action";
import AdventureMovies from "../components/Carousels/Action";
import ComedyMovies from "../components/Carousels/Action";
import DramaMovies from "../components/Carousels/Action";
import ThrillerMovies from "../components/Carousels/Action";
import Footer from "../components/Footer";

const Categories = (props) => {

    const id = props.location.state?.id;
    const name = props.location.state?.name;
    return (
        <div className="categories">
            <Navigation />
            <CategoriesMovies idGenre={id} nameGenre={name} />
            <ActionMovies />
            <AdventureMovies />
            <ComedyMovies />
            <DramaMovies />
            <ThrillerMovies />
            <Footer />
        </div>
    )

}

export default Categories;