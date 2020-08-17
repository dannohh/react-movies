import React from 'react'
import { Movie } from './Movie'

export const MovieList = (props) => {
  return (
    <div className="container">
      <div className="">
        <div className="column has-background-black">
          {
            props.movies.map((movie, i) => {
              return <Movie text={movie.overview} key={i} image={movie.poster_path} />
            })
          }
        </div>
      </div>
    </div>
  )
}
