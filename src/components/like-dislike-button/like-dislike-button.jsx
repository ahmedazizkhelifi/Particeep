import React, { useState } from "react"
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"
import "./like-dislike-button.css"
const LikeDislikeButton = ({ likes, dislikes, onLiked, onDisliked }) => {
  const [liked, setLiked] = useState(false)
  const [disLiked, setDisLiked] = useState(false)
  const handleClick = (e) => {
    if (e.target.id === "like") {
      setLiked(true)
      setDisLiked(false)
      if (typeof onLiked === "function") {
        onLiked()
      }
    } else {
      setDisLiked(true)
      setLiked(false)
      if (typeof onDisliked === "function") {
        onDisliked()
      }
    }
    setLiked(!liked)
  }
  return (
    <div className={`like-dislike`}>
      <span className="like-dislike__like" onClick={handleClick} id="like">
        <FaThumbsUp style={liked && { color: "green" }} />
        <span>{likes}</span>
      </span>
      <span className={`like-dislike__dislike`} id="dislike">
        <FaThumbsDown
          style={disLiked && { color: "red" }}
          onClick={handleClick}
        />
        <span>{dislikes}</span>
      </span>
    </div>
  )
}

export default LikeDislikeButton
