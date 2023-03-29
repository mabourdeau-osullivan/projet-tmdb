import React from "react";
import Navigation from "../components/Navigation";
import CategoriesMovies from "../components/CategoriesMovies";
import Action from "../components/Carousels/Action";
import Adventure from "../components/Carousels/Adventure";
import Comedy from "../components/Carousels/Comedy";
import Drama from "../components/Carousels/Drama";
import Thriller from "../components/Carousels/Thriller";
import Footer from "../components/Footer";

const Categories = (props) => {

    const id = props.location.state?.id;
    const name = props.location.state?.name;
    return (
        <div className="categories">
            <Navigation />
            <CategoriesMovies idGenre={id} nameGenre={name} />
            <Action />
            <Adventure />
            <Comedy />
            <Drama />
            <Thriller />
            <Footer />
        </div>
    )

}

export default Categories;