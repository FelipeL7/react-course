import React from "react";
import { getGenres } from "../services/fakeGenreService";

const Sidebar = () => {
  const genres = getGenres();
  return (
    <div className="col-2">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">All genres</li>
        {genres.map((genre) => (
          <li key={genre._id} className="nav-item">
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
