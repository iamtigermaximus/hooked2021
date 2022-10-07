import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const MovieSlides = () => {
  const [nowPlaying, setNowPlaying] = useState([])
  const TMDB_API_KEY = process.env.TMDB_API_KEY

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        setNowPlaying(response.data.results)
      })
  })
  return (
    <div className='container-fluid bg-dark p-2 d-flex justify-content-center pb-5'>
      <div className='carousel-wrapper'>
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showThumbs={false}
          showStatus={false}
        >
          {nowPlaying.slice(0, 12).map((movie) => (
            <div
              key={movie.id}
              className='text-center carousel-image-container'
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt='project'
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default MovieSlides
