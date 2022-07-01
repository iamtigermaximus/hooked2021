import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import ReactPaginate from 'react-paginate'

import axios from 'axios'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const AllMovies = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?&api_key=89112843133b22b96a96ab6de6cc8f5f&page=${page}`
      )
      .then((response) => {
        setLoading(false)
        setMovies(response.data.results)
      })
  }, [page])
  const changePage = ({ selected }) => setPage(selected + 1)
  return (
    <>
      <div className='popular-container title-page pb-5'>
        <div className='title-page-heading text-light text-center mt-4'>
          <h1>All Movies</h1>
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
              {movies.slice(0, 18).map((movie) => (
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
      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={20}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        containerClassName={'pagination justify-content-center pb-5'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        pageClassNAme={'page-item'}
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        onPageChange={changePage}
        activeLinkClassName={'active'}
      />
    </>
  )
}

export default AllMovies
