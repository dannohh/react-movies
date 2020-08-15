import React from 'react'
import { Movie } from './Movie'

export const MovieList = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          {
            props.movies.map((movie, i) => {
              return <Movie key={i} image={movie.poster_path}/>
            })
          }
        </div>
      </div>
    </div>
  )
}
