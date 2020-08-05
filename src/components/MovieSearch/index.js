import React, {useState} from 'react'

import {Cards} from './Cards'
import {Form as Search} from  "./Form"

//import api from 'api'

export const MovieSearch = () => {


// const [movies, setMovies] = setState([])

/// TODO: Send a handler to 'Search so that we can 'setMovies' when there is a submission

// useEffect(() => {
//   ; (async () => {
//     console.log(await api.index('Star Wars'))
//   })()
// })

return <main>
    <Cards />
    <Search />
  </main>
}
