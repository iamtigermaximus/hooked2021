import React from 'react'

const MovieCard = (props) => {
  return (
    <div className='card-container p-1 mb-3 rounded'>
      <div className='movie-image text-center card'>
        <img className='card-image-top' src={props.card_image} alt='...' />
        <div className='movie-overview'>
          <div className='overview-content'>
            <h1 className='overview-title'>OVERVIEW</h1>
            <p className='overview-description'>{props.description}</p>
          </div>
        </div>
      </div>
      <div className='card-body'>
        <h6 className='card-text movie-title text-center'>
          <div className='movie-title-link text-light'>{props.title}</div>
        </h6>
      </div>
    </div>
  )
}

export default MovieCard
