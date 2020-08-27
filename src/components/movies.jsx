import React, { Component } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./listGroup";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "",
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      selectedGenre,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const count = filtered.length;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            selectedGenre={selectedGenre}
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        <div className="col">
          <p>Showing {count} movies in the database</p>

          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />

          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;