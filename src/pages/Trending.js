import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'

import axios from 'axios'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const Trending = () => {
  const [trending, setTrending] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=89112843133b22b96a96ab6de6cc8f5f'
      )
      .then((response) => {
        setLoading(false)
        setTrending(response.data.results)
      })
  }, [])

  return (
    <div className='popular-container title-page pb-5'>
      <div className='title-page-heading text-light text-center mt-4'>
        <h1>Trending Movies</h1>
      </div>
      {loading ? (
        <div className='text-center'>
          <Loader
            type='ThreeDots'
            color='#00BFFF'
            height={100}
            width={100}
            timeout={3000}
            visible={true}
          />
        </div>
      ) : (
        <div className='container mt-5'>
          <div className='row'>
            {trending.slice(0, 18).map((movie) => (
              <div className='col-6 col-lg-2 ' key={movie.id}>
                <MovieCard
                  card_image={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  title={movie.title}
                  id={movie.id}
                  description={movie.overview}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Trending
