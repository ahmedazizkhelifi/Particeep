import React, { useState, useEffect } from "react"
import "./movies-list.css"
import { Card, DefaultButton } from ".."

const MoviesList = ({ category }) => {
  const [canSee, setCanSee] = useState(4)

  const [movie, setMovie] = useState([
    {
      id: "1",
      title: "Oceans 8",
      category: "Comedy",
      likes: 4,
      dislikes: 1
    },
    {
      id: "2",
      title: "Midnight Sun",
      category: "Comedy",
      likes: 2,
      dislikes: 0
    },
    {
      id: "3",
      title: "Les indestructibles 2",
      category: "Animation",
      likes: 3,
      dislikes: 1
    },
    {
      id: "4",
      title: "Sans un bruit",
      category: "Thriller",
      likes: 6,
      dislikes: 6
    },
    {
      id: "5",
      title: "Creed II",
      category: "Drame",
      likes: 16,
      dislikes: 2
    },
    {
      id: "6",
      title: "Pulp Fiction",
      category: "Thriller",
      likes: 11,
      dislikes: 3
    },
    {
      id: "8",
      title: "Seven",
      category: "Thriller",
      likes: 2,
      dislikes: 1
    },
    {
      id: "9",
      title: "Inception",
      category: "Thriller",
      likes: 2,
      dislikes: 1
    },
    {
      id: "10",
      title: "Gone Girl",
      category: "Thriller",
      likes: 22,
      dislikes: 12
    }
  ])
  const [actualMovies, setActualMovies] = useState([])
  useEffect(() => {
    setActualMovies(
      movie
        .filter((movies) => movies.category.includes(category))
        .slice(0, canSee)
    )
  }, [movie, category, canSee])

  const handleClick = (e) => {
    const newMovie = movie
    const index = newMovie.findIndex((item) => item.id === e)
    const remove = window.confirm("Are you sure you wanna remove this movie?")
    if (remove) {
      newMovie.splice(index, 1)
      setMovie(newMovie)
    }
  }
  const likeHandler = () => {
    return 1
  }

  const loadMore = () => {
    if (canSee + 4 >= movie.length) {
      return
    }
    setCanSee(canSee + 4)
  }

  const showless = () => {
    setCanSee(canSee > 4 ? canSee - 4 : canSee)
  }

  return (
    <div>
      <div className="movie-list">
        {actualMovies.length === 0 ? (
          "true"
        ) : (
          <div className="movie-list-group">
            {actualMovies.map((id, index) => (
              <Card
                imgSrc={"https://api.lorem.space/image/movie?w=380&h=550"}
                key={index}
                {...id}
                handleClick={handleClick}
                likehandler={likeHandler}
              />
            ))}
          </div>
        )}
      </div>
      <div className="next-prev">
        <DefaultButton
          text="Show less"
          onClick={showless}
          disabled={canSee === 4}
        />
        <DefaultButton text="Show more" onClick={loadMore} />
      </div>
    </div>
  )
}

export default MoviesList
