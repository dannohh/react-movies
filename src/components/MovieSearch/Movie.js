import React from 'react'

export const Movie = (props) => {
  return (
    <div className="column">
      <div className="card">
        {
            props.image === null ? <img src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg" alt="card" /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}` }alt="none" />
        }
      </div>
    </div>
  )
}
