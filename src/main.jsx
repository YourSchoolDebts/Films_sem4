import React from "react";
import { Movies } from "./components/Movies";
import { Search } from "./components/search";
import { Preloader } from "./components/preloader";

class Main extends React.Component{
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount(){
        fetch('https://www.omdbapi.com/?apikey=54fd4128&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search, loading:false}));
    }
    searchMovies = (str, type = "all") => {
        fetch(`https://www.omdbapi.com/?apikey=54fd4128&s=${str}${
            type !== "all" ? `&type=${type}` : ""
        }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search, loading:false})); // тут посмотреть лоадер
    }
    render(){
        const { movies, loading } = this.state;
        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {loading ? <Preloader /> : <Movies movies={this.state.movies}/>}
        </main>
    }
}


export { Main };
