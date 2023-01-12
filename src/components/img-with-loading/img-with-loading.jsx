import React, { useState, useEffect } from "react"
import spinner from "../../assets/spinner.gif"
const ImageWithLoading = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => setIsLoading(false)
    image.onerror = () => setIsLoading(false)
  }, [src])
  return (
    <>
      {isLoading ? (
        <img alt="loading spinner" src={spinner} />
      ) : (
        <img alt={alt} src={src} />
      )}
    </>
  )
}

export default ImageWithLoading
