import React from "react"
import "./movie-card.css"
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"
const MovieCard = ({ handleClick, id, title, category, likes, dislikes }) => {
  return (
    <figure className="movie-container">
      <div className="oui">
        <img
          alt="Movie Thumbnail"
          className="movie-img"
          src="https://api.lorem.space/image/movie?w=150&h=220"></img>
      </div>
      <div className="description">
        <div>
          <h1 className="movie-title">{title}</h1>
          <p>{category}</p>
        </div>
        <div>
          <div className="container">
            <div className="btn-container">
              <button>
                <span className="material-symbols-rounded">
                  <FaThumbsUp />{" "}
                </span>
                {likes}
              </button>
              <i class="bi bi-hand-thumbs-up"></i>

              <button>
                <span className="material-symbols-rounded">
                  <FaThumbsDown />{" "}
                </span>
                {dislikes}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="div-movie-button-delete">
        <button className="movie-button-delete" onClick={() => handleClick(id)}>
          X
        </button>
      </div>
    </figure>
  )
}

export default MovieCard
