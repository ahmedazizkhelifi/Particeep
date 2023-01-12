import React from "react"
import "./default-button.css"
const DefaultButton = ({ onClick, text, disabled }) => {
  return (
    <button
      className={`${disabled ? "done" : ""} default-button`}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  )
}

export default DefaultButton
