import React from 'react'
import { Nav } from './Nav'
import { SearchBar } from './SearchBar'
import { MovieList } from './MovieList'

export class MovieSearch extends React.Component {
  constructor() {
    super()
      this.state = {
        searchTerm: '',
        movies: [],

      }
      this.apiKey = process.env.REACT_APP_API_KEY
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`).then(data => data.json()).then(data =>
    {
      console.log(data)
      this.setState({
        movies: [...data.results]
      })
    })
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

render() {
  return(
    <div>
      <Nav />
      <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <MovieList movies={this.state.movies}/>
    </div>
  )
}

}
