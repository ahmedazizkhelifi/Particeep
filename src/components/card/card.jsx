import React from "react"
import "./card.css"
import { ImageWithLoading, LikeDislikeButton } from "../"
const Card = ({
  handleClick,
  id,
  title,
  category,
  likes,
  dislikes,
  imgSrc
}) => {
  return (
    <div className="card">
      <div className="card_image">
        <ImageWithLoading src={imgSrc} alt={title} />
      </div>
      <div className="card-content">
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
          <LikeDislikeButton likes={likes} dislikes={dislikes} />
        </div>
        <p onClick={() => handleClick(id)}>Delete this movie </p>
      </div>
    </div>
  )
}
export default Card
