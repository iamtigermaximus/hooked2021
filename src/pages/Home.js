import React, { useState, useEffect } from 'react'
import MovieSlides from '../components/MovieSlides'
import MovieCard from '../components/MovieCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=89112843133b22b96a96ab6de6cc8f5f&language=en-US&page=1&include_adult=false&query=${search}`
      )
      .then((response) => {
        setData(response.data.results)
        setLoading(false)
      })
  }, [search])

  const searchMovie = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <>
      <MovieSlides />
      <div className='container'>
        <div className='row justify-content-center '>
          <div className='col-12 col-md-10 col-lg-8'>
            <form className='card-sm'>
              <div className='card-body row no-gutters align-items-center'>
                <div className='col'>
                  <input
                    className='form-control form-control-lg form-control-borderless'
                    type='text'
                    placeholder='Search a Movie'
                    onChange={searchMovie}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='text-center'>
        {loading ? (
          <Loader
            type='ThreeDots'
            color='#00BFFF'
            height={100}
            width={100}
            timeout={3000}
            visible={true}
          />
        ) : (
          <div className='container my-5'>
            <div className='row'>
              {data.slice(0, 18).map((movie) => (
                <div className='col-lg-2 col-6' key={movie.id}>
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
    </>
  )
}

export default Home
